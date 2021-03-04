const validate = (values) => {
    const errors = {};
    // title validate
    if (!values.title) {
        errors['title'] = 'Vui lòng không để trống';
    } 
    // description Validate
    if (!values.description) {
        errors['description'] = 'Vui lòng không để trống';
    } 

    // Status Validate
    if (!values.status) {
        errors['status'] = 'Vui lòng không để trống';
    }
    return errors;

};
export default validate;