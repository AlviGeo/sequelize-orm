const Joi = require("joi");

export const getOtherUserProfile = {
  body: {
    userId: Joi.number().required(),
  },
};

export const changePassword = {
  body: {
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().required(),
  },
};

export const register = {
  body: {
    name: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
};

export const login = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
};

export const updateUserById = {
  body: {
    
  }
}

export const location = {
  body: {

  }
}

export const checkIn = {
  body: {

  }
}

export const checkOut = {
  body: {
    
  }
}
export const getLocation = {
  body: {
    
  }
}
export const deleteUser = {
  body: {
    
  }
}
export const resetPassword = {
  body: {
    
  }
}
