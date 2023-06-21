function trimPathRight(path: string, length: number): string {
    let pathPartial = path.replace(/(\\\\|\\)/g, "/").split("/");
    return pathPartial.slice(0, -length).join("/");
}

export default trimPathRight;
