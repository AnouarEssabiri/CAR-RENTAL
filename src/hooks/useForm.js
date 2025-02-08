import { useState } from 'react';

const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = (validationRules) => {
    const newErrors = {};
    Object.keys(validationRules).forEach(field => {
      const value = formData[field];
      const rules = validationRules[field];

      if (rules.required && !value) {
        newErrors[field] = `${field} is required`;
      } else if (rules.minLength && value.length < rules.minLength) {
        newErrors[field] = `${field} must be at least ${rules.minLength} characters`;
      } else if (rules.pattern && !rules.pattern.test(value)) {
        newErrors[field] = `${field} format is invalid`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
  };

  return {
    formData,
    errors,
    handleChange,
    validate,
    resetForm,
    setFormData
  };
};

export default useForm;
