const BaseSerializer = require('./BaseSerializer');

class UserSerializer extends BaseSerializer {
  constructor(model) {
    const serializedModel = model ? model.toJSON() : null;

    delete serializedModel?.password;
    delete serializedModel?.active;
    delete serializedModel?.token;

    super('success', serializedModel);
  }
}

module.exports = UserSerializer;
