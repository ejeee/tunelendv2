import roles from '../config/role.json' with { type: "json" };

class Role {
  constructor() {
    this.roles = roles;
  }

  getRoleByName(name) {
    return this.roles.find((role) => role.name === name);
  }

  getRoles() {
    return this.roles;
  }
}

export default {Role};