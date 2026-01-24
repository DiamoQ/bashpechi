const rootSelector = '[data-js-header]';

class FloatingHeader {
    constructor(root) {
        this.root = root;

        // --- thresholds ---
        this.stickyAfter = 1;

        // compact hysteresis (zone)
        this.compactOn = 120;   // request compact when y >= 80
        this.compactOff = 50;  // request normal when y <= 30

        // delay to commit compact state (anti-microscroll)
        this.compactDelay = 900;

        // hide/show by direction
        this.hideDistance = 70;
        this.showDistance = 35;
        this.noise = 2;

        // state
        this.lastY = window.scrollY || 0;
        this.accDown = 0;
        this.accUp = 0;

        this.isSticky = false;

        this.compactState = this.root.classList.contains('is-compact'); // committed
        this.pendingCompactState = null; // requested & waiting
        this.compactTimer = null;

        this.isHidden = this.root.classList.contains('is-hidden');

        this.ticking = false;

        this.onScroll = this.onScroll.bind(this);
        this.onResize = this.onResize.bind(this);

        window.addEventListener('scroll', this.onScroll, { passive: true });
        window.addEventListener('resize', this.onResize, { passive: true });

        this.apply(this.lastY, true);
    }

    onResize() {
        this.accDown = 0;
        this.accUp = 0;
        this.clearCompactTimer();
        this.apply(window.scrollY || 0, true);
    }

    onScroll() {
        if (this.ticking) return;
        this.ticking = true;

        requestAnimationFrame(() => {
            const y = window.scrollY || 0;
            this.apply(y);
            this.ticking = false;
        });
    }

    clearCompactTimer() {
        if (!this.compactTimer) return;
        clearTimeout(this.compactTimer);
        this.compactTimer = null;
        this.pendingCompactState = null;
    }

    setSticky(next) {
        if (this.isSticky === next) return;
        this.isSticky = next;
        this.root.classList.toggle('is-sticky', next);
    }

    setHidden(next) {
        if (this.isHidden === next) return;
        this.isHidden = next;
        this.root.classList.toggle('is-hidden', next);
    }

    commitCompact(next) {
        if (this.compactState === next) return;
        this.compactState = next;
        this.root.classList.toggle('is-compact', next);
    }

    requestCompact(next) {
        // next: true/false
        if (this.compactState === next) {
            this.clearCompactTimer();
            return;
        }

        if (this.pendingCompactState === next) return;

        this.clearCompactTimer();
        this.pendingCompactState = next;

        this.compactTimer = setTimeout(() => {
            this.commitCompact(next);
            this.pendingCompactState = null;
            this.compactTimer = null;

            const yNow = window.scrollY || 0;
            if (yNow <= this.compactOff) {
                this.setHidden(false);
                this.accDown = 0;
                this.accUp = 0;
            }
        }, this.compactDelay);
    }

    apply(y, force = false) {
        const dy = y - this.lastY;
        const abs = Math.abs(dy);

        this.setSticky(y > this.stickyAfter);

        // Внутри "мертвой зоны" (между off и on) не меняем целевое состояние
        if (y >= this.compactOn) this.requestCompact(true);
        else if (y <= this.compactOff) this.requestCompact(false);

        // --- near top: always visible, reset accumulators ---
        if (y <= this.compactOff) {
            this.setHidden(false);
            this.accDown = 0;
            this.accUp = 0;
            this.lastY = y;
            return;
        }

        // --- ignore tiny jitter ---
        if (!force && abs < this.noise) {
            this.lastY = y;
            return;
        }

        // --- hide/show by direction with accumulation ---
        if (dy > 0) {
            this.accDown += dy;
            this.accUp = 0;

            if (this.accDown >= this.hideDistance) {
                this.setHidden(true);
            }
        } else if (dy < 0) {
            this.accUp += -dy;
            this.accDown = 0;

            if (this.accUp >= this.showDistance) {
                this.setHidden(false);
            }
        }

        this.lastY = y;
    }

    destroy() {
        window.removeEventListener('scroll', this.onScroll);
        window.removeEventListener('resize', this.onResize);
        this.clearCompactTimer();
    }
}

class FloatingHeaderCollection {
    constructor() {
        document.querySelectorAll(rootSelector).forEach((el) => new FloatingHeader(el));
    }
}

export default FloatingHeaderCollection;
