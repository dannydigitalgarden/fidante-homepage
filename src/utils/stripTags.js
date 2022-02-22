export default function stripTags(originalString) {
    if (originalString) return originalString.replace(/(<([^>]+)>)/gi, "")
}