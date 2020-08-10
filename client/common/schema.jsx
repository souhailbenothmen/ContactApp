import { LongTextField } from "uniforms-unstyled";

export const schema = {
  title: "Guest",
  type: "object",
  properties: {
    nom: { type: "string" },
    prenom: { type: "string" },
    email: { type: "string", format: "email" },
    telephone: {
      type: "string",
      pattern: "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$",
      errorMessage: {
        type: "should be an object", // will not replace internal "type" error for the property "foo"
        required: "should have property foo",
        additionalProperties: "should not have properties other than foo",
      },
    },
    adresse: { type: "string" },
    ville: { type: "string" },
    province: { type: "string" },
    codePostal: {
      type: "string",
      pattern: "^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$",
    },
    pays: {
      type: "string",
    },
    commentaire: {
      type: "string",
      uniforms: {
        component: LongTextField,
      },
    },
  },
  required: [
    "nom",
    "prenom",
    "email",
    "telephone",
    "adresse",
    "ville",
    "province",
    "codePostal",
    "pays",
    "commentaire",
  ],
};
