import React from "react";
import Ajv from "ajv";
import { AutoForm } from "uniforms-material";
import { JSONSchemaBridge } from "uniforms-bridge-json-schema";
import { ContactCollection } from "../../collections/contact";
import { useDispatch } from "react-redux";
import { addForm } from "../actions/allActions";
import { schema } from "../common/schema";
const ajv = new Ajv({ allErrors: true, useDefaults: true });
function createValidator(schema) {
  ajv.addKeyword("telephone", {
    validate: function (schema, data) {
      return typeof schema == "object" && schema !== null
        ? deepEqual(schema, data)
        : schema === data;
    },
    errors: false,
  });

  const validator = ajv.compile(schema);
  return (model) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}
const schemaValidator = createValidator(schema);
const bridge = new JSONSchemaBridge(schema, schemaValidator);

export const Contact = () => {
  const dispatch = useDispatch();
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
              email: data.email,
              telephone: data.telephone,
              adresse: data.adresse,
              ville: data.ville,
              province: data.province,
              codePostal: data.codePostal,
              pays: data.pays,
              commentaire: data.commentaire,
            },
            (err, res) => {
              if (err) {
                console.log(err);
              } else {
                dispatch(addForm());
                console.log(res);
              }
            }
          );
        }}
      />
    </div>
  );
};
