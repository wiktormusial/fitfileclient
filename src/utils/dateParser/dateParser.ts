const dataParser = (data: string) => {
    const date = new Date(data)

    return date.toLocaleString()
}

export default dataParser