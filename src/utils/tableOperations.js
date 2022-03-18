export const getTableFilters = (fields) => {
    return fields.reduce((prevItem, field) => ({
        ...prevItem,
        [field]: ''
    }), {})
}