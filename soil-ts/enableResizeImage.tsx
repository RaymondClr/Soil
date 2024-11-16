function enableResizeImage(): void {
    Image.prototype.onDraw = function () {
        if (!this.image) {
            return;
        }
        const controlSize = this.size;
        const controlWidth = controlSize.width as number;
        const controlHeight = controlSize.height as number;
        const imageSize = this.image.size;
        const imageWidth = imageSize.width as number;
        const imageHeight = imageSize.height as number;
        const scale = Math.min(controlWidth / imageWidth, controlHeight / imageHeight);
        const newWidth = scale * imageWidth;
        const newHeight = scale * imageHeight;
        const newLeft = (controlWidth - newWidth) / 2;
        const newTop = (controlHeight - newHeight) / 2;
        this.graphics.drawImage(this.image, newLeft, newTop, newWidth, newHeight);
    };
}

export default enableResizeImage;
