import {RessourceHumaine} from "./RessourceHumaine";
import {Matiere} from "./Matiere";
import {Module} from "./Module";
import {Indisponibilite} from "./Indisponibilite";

export class Formateur extends RessourceHumaine {

  public matieres?: Matiere[];
  public modules?: Module[];
  public indisponibilites?: Indisponibilite[];

}
