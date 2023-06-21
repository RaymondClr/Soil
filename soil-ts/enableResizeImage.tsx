function enableResizeImage(): void {
    Image.prototype.onDraw = function () {
        if (!this.image) {
            return;
        }
        const controlSize = this.size;
        const controlWidth = controlSize.width;
        const controlHeight = controlSize.height;
        const imageSize = this.image.size;
        const imageWidth = imageSize.width;
        const imageHeight = imageSize.height;
        const scale = Math.min(controlWidth / imageWidth, controlHeight / imageHeight);
        const newWidth = scale * imageWidth;
        const newHeight = scale * imageHeight;
        const newLeft = (controlWidth - newWidth) / 2;
        const newTop = (controlHeight - newHeight) / 2;
        this.graphics.drawImage(this.image, newLeft, newTop, newWidth, newHeight);
    };
}

export default enableResizeImage;
