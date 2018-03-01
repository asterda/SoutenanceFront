export abstract class RessourceMaterielle {

  constructor(
    private code: string,
    private coutJour: number,
    private enPanneOuInutilisable: boolean
  ){}

}
