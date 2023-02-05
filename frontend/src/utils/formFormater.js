function signup(data) {
  return {
    ...data,
    cpf: data.cpf.replaceAll(".", "").replace("-", ""),
    phone: data.phone.replace("(", "").replace(")", "").replace(" ", "").replace("-", ""),
  };
}

function editCpf(cpf) {
  return cpf.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4");
}

function editPhone(phone) {
  return phone.replace(/^([\d]{2})([\d]{5})([\d]{4})$/, "($1) $2-$3");
}

export const formFormater = { signup, editCpf, editPhone };
