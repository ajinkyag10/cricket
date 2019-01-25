import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-inning',
  templateUrl: './inning.component.html',
  styleUrls: ['./inning.component.css']
})
export class InningComponent implements OnInit {

  @ViewChild('possibleRuns') possibleRunsinf: ElementRef;
  @ViewChild('Wicket') wicketTypeinf: ElementRef;

  batsmanOnStrike: String;
  nonStrikeBatsman: String;
  newBaller: String;
  balls: number = 0;
  overs: number = 0;
  possibilityOfRuns: number;
  wickets: number;
  catchBy: String;
  commentary: String;
  battingTeam;
  bowlingTeam;

  public showWicket: boolean = false;
  public showCatchBy: boolean = false;
  public buttonName: any = 'ShowType';
  public buttonName1: any = 'Show';
  public LastBallOfInningNotification = false;
  public FirstBallOf2ndInningNotification = false;

  score;
  outby;

  constructor(
    public matchService: MatchService, private router: Router, private route: ActivatedRoute
  ) {
    if (matchService.getMatchState() == matchService.MATCH_STATE_TEAMS_DEFINED) {
      matchService.setMatchState();
      this.battingTeam = matchService.getMatch().getBattingTeam().getPlayers();
      this.bowlingTeam = matchService.getMatch().getBallingTeam().getPlayers();
    }
    console.log(matchService.getMatch().getOvers());
  }

  ngOnInit() {
  }

  onSelectOfPossibility() {
    this.score = ((<HTMLInputElement>this.possibleRunsinf.nativeElement).value);
    if (this.score == 'Wicket') {
      this.showWicket = true;
    }
    else {
      this.showWicket = false;
    }

  }


  onSelectOfWicket() {
    this.outby = ((<HTMLInputElement>this.wicketTypeinf.nativeElement).value);
    if (this.outby == 'Catch' || this.outby == 'Stumping') {
      this.showCatchBy = true;
    } else {
      this.showCatchBy = false;
    }
  }

  onaddScoreButtonClick() {
    if (this.matchService.getMatch().getOvers() == this.overs && this.balls == 1) {
      this.overs = 0;
      this.matchService.setMatchState();
      this.FirstBallOf2ndInningNotification = true;
      if (this.matchService.getMatch().getBattingTeam() == this.matchService.getMatch().getTeam1()) {
        this.battingTeam = this.matchService.getMatch().getTeam2().getPlayers();
        this.bowlingTeam = this.matchService.getMatch().getTeam1().getPlayers();
      }
    }
    this.balls++;
    if (this.balls >= 7) {
      this.balls = 1;
      this.overs++;
    }

    this.matchService.getMatch().saveSummaryDetail(this.batsmanOnStrike, this.nonStrikeBatsman, this.newBaller, this.balls, this.overs,
      this.possibilityOfRuns, this.wickets, this.catchBy, this.commentary);


    if (this.matchService.getMatch().getOvers() == this.overs + 1 && this.balls == 6) {
      this.LastBallOfInningNotification = true;
      this.matchService.setMatchState();
    }
    else {
      this.LastBallOfInningNotification = false;
    }


  }
}
