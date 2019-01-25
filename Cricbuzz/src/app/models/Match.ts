import { Team } from './Team';
import { Commentary } from './Commentary';


export class Match {

  readonly DECISION_BATTING = 1;
  readonly DECISION_BaLLING = 2;

  private team1Name: String;
  private team2Name: String;

  private toss: String;
  private decision: number;
  private overs: number;

  private team1: Team;
  private team2: Team;


  private saveSummaryDetails: Array<Commentary> = [];

  //Setter to set teamnames  
  setTeamNames(team1: String, team2: String) {

    this.team1Name = team1;
    this.team2Name = team2;
    console.log(this.team1Name);
    console.log(this.team2Name);

    this.team1 = new Team();
    this.team2 = new Team();
  }

  //getter to get teamname1
  getTeam1Name() {
    return this.team1Name;
  }

  //getter to get teamname2
  lastBallOfInning() {
    this.overs = 0;

  }
  getTeam2Name() {
    return this.team2Name;
  }

  //  Setter to set toss & Decision
  setToss(tossWon: String, decision: number): Boolean {
    this.toss = tossWon;
    this.decision = decision;
    return true;
  }

  // Setter to set teams
  setTeams(team1: Team, team2: Team) {
    this.team1 = team1; 3
    this.team2 = team2; 3
  }

  //getter to get teams
  getTeams() {
    return this.team1, this.team2;
  }

  //getter to get team1
  getTeam1() {
    return this.team1;
  }

  //getter to get team2
  getTeam2() {
    return this.team2;
  }

  // Setter to set overs
  setOvers(overs: number) {
    this.overs = overs;
    console.log(this.overs);
  }

  //getter to get toss
  getToss(): String {
    return this.toss;
  }

  //getter to get decision
  getDecision(): number {
    return this.decision;
  }

  //getter to get overs
  getOvers(): number {
    return this.overs;
  }

  //  if team1 won the toss and choose batting then this function returns 
  // team1 is a batting team otherwise return team2 is a batting team.
  getBattingTeam() {
    if (this.toss == this.team1Name && this.decision == this.DECISION_BATTING) {
      return this.team1;
    }
    else {
      return this.team2;
    }
  }

  // if team1 won the toss and choose balling then this function returns 
  //  team1 is balling team otherwise  team2 is a balling team.
  // batsmanOnStrike:String,nonStrikeBatsman:String,newBaller:String,balls: number,overs:number,

  getBallingTeam() {
    if (this.toss == this.team1Name && this.decision == this.DECISION_BaLLING) {
      return this.team1;
    }
    else {
      return this.team2;
    }
  }

  // Method to push data which is to be displayed on commentary page
  saveSummaryDetail(batsmanOnStrike, nonStrikeBatsman, newBaller, balls, overs,
    possibilityOfRuns, wickets, catchBy, commentary) {
    this.saveSummaryDetails.push(new Commentary(batsmanOnStrike, nonStrikeBatsman, newBaller, balls, overs,
      possibilityOfRuns, wickets, catchBy, commentary))

    console.log(this.saveSummaryDetails);
  }
  getsaveSummaryDetails() {
    return this.saveSummaryDetails;
  }




}