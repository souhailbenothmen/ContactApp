import React from "react";
import Ajv from "ajv";
import { AutoForm } from "uniforms-material";
import { JSONSchemaBridge } from "uniforms-bridge-json-schema";
import { LongTextField } from "uniforms-unstyled";
import { ContactCollection } from "../../collections/contact";

const schema = {
  title: "Guest",
  type: "object",
  properties: {
    nom: { type: "string" },
    prenom: { type: "string" },
    email: { type: "string" },
    telephone: { type: "string" },
    adresse: { type: "string" },
    ville: { type: "string" },
    province: { type: "string" },
    codePostal: { type: "number" },
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
const ajv = new Ajv({ allErrors: true, useDefaults: true });
function createValidator(schema) {
  const validator = ajv.compile(schema);
  return (model) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}
const schemaValidator = createValidator(schema);
const bridge = new JSONSchemaBridge(schema, schemaValidator);

export const Contact = () => {
  return (
    <div style={{ width: "50%", marginTop: "5%" }}>
      <AutoForm
        schema={bridge}
        onSubmit={(data) => {
          console.log(data);
          ContactCollection.insert(
            {
              nom: data.nom,
              prenom: data.prenom,
            },
            (err, res) => {
              if (err) {
                console.log(err);
              } else {
                console.log(res);
              }
            }
          );
        }}
      />
    </div>
  );
};
