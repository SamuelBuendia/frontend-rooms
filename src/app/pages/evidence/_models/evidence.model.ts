import { UserModel } from "../../user/_models/user.model";

export class EvidenceModel {
  id: number;
  re_expiration_date: string;
  active: string;
  qualification: string;
  observation: string;
  evidence_link: string;
  evidence_file: string;
  folder: any;
  functionary: any;
  teacher: any;
}
