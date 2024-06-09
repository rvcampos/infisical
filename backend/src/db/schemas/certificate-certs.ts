// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { zodBuffer } from "@app/lib/zod";

import { TImmutableDBKeys } from "./models";

export const CertificateCertsSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  certId: z.string().uuid(),
  encryptedCertificate: zodBuffer,
  encryptedCertificateChain: zodBuffer
});

export type TCertificateCerts = z.infer<typeof CertificateCertsSchema>;
export type TCertificateCertsInsert = Omit<z.input<typeof CertificateCertsSchema>, TImmutableDBKeys>;
export type TCertificateCertsUpdate = Partial<Omit<z.input<typeof CertificateCertsSchema>, TImmutableDBKeys>>;
