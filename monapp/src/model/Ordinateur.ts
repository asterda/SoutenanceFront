import {RessourceMaterielle} from "./RessourceMaterielle";
import {Cursus} from "./Cursus";

export class Ordinateur extends RessourceMaterielle {

  public processeur: string;
  public ramGiga: number;
  public ddGiga: number;
  public dateAchat: Date;
  public cursus?: Cursus[];

}
