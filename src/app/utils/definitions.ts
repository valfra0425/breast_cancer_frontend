import { z } from 'zod';

export type formData = z.infer<typeof formDataSchema >

export const formDataSchema = z.object({
  laterality: z.enum(["L", "R"]).nullable().refine((val) => val !== null, {
    message: "* O campo é obrigatorio",
  }),
  age: z.coerce.number().max(120).min(1),
  view: z.enum(["CC", "MLO", "ML", "LM", "AT", "LMO"]).nullable().refine((val) => val !== null, {
    message: "* O campo é obrigatorio",
  }),
  implant: z.enum(["true", "false"]).transform(val => val === "true").nullable().refine((val) => val !== null, {
    message: "* O campo é obrigatorio",
  }),
  biopsy: z.enum(["true", "false"]).transform(val => val === "true").nullable().refine((val) => val !== null, {
    message: "* O campo é obrigatorio",
  }),
  cancer: z.enum(["true", "false"]).transform(val => val === "true").optional(),
  difficult_negative_case: z.enum(["true", "false"]).transform(val => val === "true").optional(),
  invasive: z.enum(["true", "false"]).transform(val => val === "true").optional(),
  image: z.any().nullable().refine((val) => val !== null && val?.length > 0, {
    message: "* É nessesário que uma imagem seja enviada",
  }).refine((val) => {
    if (val instanceof FileList) {
      const file = val[0];
      const validTypes = ['image/png', 'image/jpeg'];
      return validTypes.includes(file.type);
    }
    return false;
  }, {
    message: "* O arquivo deve ser um PNG ou JPG",
  }),
});