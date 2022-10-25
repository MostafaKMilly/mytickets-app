const colors = [
    "rgba(255, 226, 167, 1)",
    "rgba(171, 49, 214, 1)",
    "rgba(63, 37, 37, 1)",
    "rgba(0, 101, 255, 1)",
    "rgba(245, 191, 51, 1)",
    "rgba(97, 91, 91, 1)"
]

export const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}