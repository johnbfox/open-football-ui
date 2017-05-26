export class LeagueBlock {
  id:number;
  title:string;

  constructor(id: number, title:string){
    this.id = id;
    this.title = title;
  }

  getLogoUrl(): string {
    const filename: string = this.title.toLowerCase().replace(/ /g, '_');
    console.log(filename);
    return `/assets/league_logos/${filename}.png`;
  }
}
