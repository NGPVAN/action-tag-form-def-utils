var _ = require('lodash');

function fields(tree){
  return _.reduce(tree, function (memo, value) {
    if (_.isObject(value)) {
      if (!value.children) {
        return memo.concat(value);
      } else {
        return memo.concat(fields(value));
      }
    } else {
      return memo;
    }
  }, []);
}

function find(tree, name, isFlat) {
  return _(isFlat ? tree : fields(tree)).find({ 'name': name });
}

function fields_of_type(tree, type, isFlat) {
  return _.filter(isFlat ? tree : fields(tree), { 'type': type });
}

module.exports = {
  fields: fields,
  find_field: find,
  fields_of_type: fields_of_type
};
