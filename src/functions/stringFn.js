function excerpt(text) {
    return text.length > 15 ? text.substring(0, 15) + "..." : text;
}

export {
    excerpt,
}