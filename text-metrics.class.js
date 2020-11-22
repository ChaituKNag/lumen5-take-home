class TextMetrics {
    constructor(word, font, context) {
        context.font = font;
        context.fillText(word, 0, 0);

        // These methods are expensive to compute:
        this.width = this._calculateTextWidth(context);
        this.ascenderHeight = this._calculateAscenderHeight(context);
        this.descenderHeight = this._calculateDescenberHeight(context);
    }

    // placeholder method
    _calculateTextWidth() {
        // internal implementation
    }

    // placeholder method
    _calculateAscenderHeight() {
        // internal implementation
    }

    // placeholder method
    _calculateDescenberHeight() {
        // internal implementation
    }
}

export default TextMetrics;