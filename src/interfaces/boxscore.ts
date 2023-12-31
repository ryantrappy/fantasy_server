export interface Boxscore {
  homeScore: number;
  homeTeamId: number;
  homeRoster?: HomeRosterEntity[] | null;
  awayScore: number;
  awayTeamId: number;
  awayRoster?: AwayRosterEntity[] | null;
}
export interface HomeRosterEntity {
  seasonId: number;
  scoringPeriodId: number;
  id: number;
  firstName: string;
  fullName: string;
  lastName: string;
  proTeam: string;
  proTeamAbbreviation: string;
  defaultPosition: string;
  eligiblePositions?: string[] | null;
  availabilityStatus: string;
  isDroppable: boolean;
  isInjured: boolean;
  injuryStatus: string;
  rosteredPosition: string;
  totalPoints: number;
  pointBreakdown: PointBreakdown;
  projectedPointBreakdown: ProjectedPointBreakdown;
  rawStats: RawStats;
  projectedRawStats: ProjectedRawStats;
}
export interface PointBreakdown {
  usesPoints: boolean;
  rushingYards?: number | null;
  passingYards?: number | null;
  passingTouchdowns?: number | null;
  passingInterceptions?: number | null;
  rushingTouchdowns?: number | null;
  lostFumbles?: number | null;
  receivingYards?: number | null;
  receivingTouchdowns?: number | null;
  receivingReceptions?: number | null;
  madeFieldGoalsFromUnder40?: number | null;
  madeExtraPoints?: number | null;
  defensiveInterceptions?: number | null;
  defensiveSacks?: number | null;
  defensive0PointsAllowed?: number | null;
  defensive1To6PointsAllowed?: number | null;
  defensive7To13PointsAllowed?: number | null;
  defensive14To17PointsAllowed?: number | null;
  defensive28To34PointsAllowed?: number | null;
  defensive35To45PointsAllowed?: number | null;
  defensiveLessThan100YardsAllowed?: number | null;
  defensive100To199YardsAllowed?: number | null;
  defensive200To299YardsAllowed?: number | null;
  defensive350To399YardsAllowed?: number | null;
  defensive400To449YardsAllowed?: number | null;
  defensive450To499YardsAllowed?: number | null;
  defensive500To549YardsAllowed?: number | null;
  defensiveOver550YardsAllowed?: number | null;
  defensiveFumbles?: number | null;
  defensiveBlockedKicks?: number | null;
  interceptionReturnTouchdown?: number | null;
}
export interface ProjectedPointBreakdown {
  usesPoints: boolean;
  rushingYards?: number | null;
  rushingTouchdowns?: number | null;
  rushing2PtConversions?: number | null;
  receivingYards?: number | null;
  receivingTouchdowns?: number | null;
  receiving2PtConversions?: number | null;
  receivingReceptions?: number | null;
  lostFumbles?: number | null;
  passingYards?: number | null;
  passingTouchdowns?: number | null;
  passing2PtConversions?: number | null;
  passingInterceptions?: number | null;
  madeFieldGoalsFrom50To59?: number | null;
  madeFieldGoalsFrom40To49?: number | null;
  madeFieldGoalsFromUnder40?: number | null;
  missedFieldGoals?: number | null;
  madeExtraPoints?: number | null;
  defensiveBlockedKickForTouchdowns?: number | null;
  defensiveInterceptions?: number | null;
  defensiveFumbles?: number | null;
  defensiveBlockedKicks?: number | null;
  defensiveSafeties?: number | null;
  defensiveSacks?: number | null;
  kickoffReturnTouchdown?: number | null;
  puntReturnTouchdown?: number | null;
  fumbleReturnTouchdown?: number | null;
  interceptionReturnTouchdown?: number | null;
  defensive0PointsAllowed?: number | null;
  defensive1To6PointsAllowed?: number | null;
  defensive7To13PointsAllowed?: number | null;
  defensive14To17PointsAllowed?: number | null;
  defensive28To34PointsAllowed?: number | null;
  defensive35To45PointsAllowed?: number | null;
  defensiveOver45PointsAllowed?: number | null;
  defensive100To199YardsAllowed?: number | null;
  defensive200To299YardsAllowed?: number | null;
  defensive350To399YardsAllowed?: number | null;
  defensive400To449YardsAllowed?: number | null;
  defensive450To499YardsAllowed?: number | null;
  defensive500To549YardsAllowed?: number | null;
  defensiveOver550YardsAllowed?: number | null;
}
export interface RawStats {
  usesPoints: boolean;
  rushingAttempts?: number | null;
  rushingYards?: number | null;
  rushingYardsPerAttempt?: number | null;
  teamWin?: number | null;
  passingAttempts?: number | null;
  passingCompletions?: number | null;
  passingIncompletions?: number | null;
  passingYards?: number | null;
  passingTouchdowns?: number | null;
  passingYardsPer5Yards?: number | null;
  passingYardsPer10Yards?: number | null;
  passingYardsPer20Yards?: number | null;
  passingYardsPer25Yards?: number | null;
  passingYardsPer50Yards?: number | null;
  passingYardsPer100Yards?: number | null;
  passingCompletionsPer5Completions?: number | null;
  passingCompletionsPer10Completions?: number | null;
  passingIncompletionsPer5Incompletions?: number | null;
  passingInterceptions?: number | null;
  passingCompletionPercentage?: number | null;
  rushingTouchdowns?: number | null;
  rushingYardsPer5Yards?: number | null;
  rushingYardsPer10Yards?: number | null;
  rushingYardsPer20Yards?: number | null;
  rushingAttemptsPer5Attempts?: number | null;
  rushingAttemptsPer10Attempts?: number | null;
  fumbles?: number | null;
  lostFumbles?: number | null;
  totalTurnovers?: number | null;
  teamPointsScored?: number | null;
  receivingYards?: number | null;
  receivingTouchdowns?: number | null;
  receivingTouchdowns40Plus?: number | null;
  receivingYardsPer5Yards?: number | null;
  receivingYardsPer10Yards?: number | null;
  receivingYardsPer20Yards?: number | null;
  receivingYardsPer25Yards?: number | null;
  receivingYardsPer50Yards?: number | null;
  receivingYardsPer100Yards?: number | null;
  receivingReceptions?: number | null;
  receptionsPer5Receptions?: number | null;
  receptionsPer10Receptions?: number | null;
  receivingTargets?: number | null;
  receivingYardsAfterCatch?: number | null;
  receivingYardsPerReception?: number | null;
  passingIncompletionsPer10Incompletions?: number | null;
  passingTouchdowns40Plus?: number | null;
  passingTouchdowns50Plus?: number | null;
  passingYards300To399?: number | null;
  rushingYardsPer25Yards?: number | null;
  rushingYardsPer50Yards?: number | null;
  teamLoss?: number | null;
  madeFieldGoalsFromUnder40?: number | null;
  attemptFieldGoalsFromUnder40?: number | null;
  madeFieldGoals?: number | null;
  attemptedFieldGoals?: number | null;
  fieldGoalMadeYards?: number | null;
  fieldGoalMadeYardsPer5Yards?: number | null;
  fieldGoalMadeYardsPer10Yards?: number | null;
  fieldGoalMadeYardsPer20Yards?: number | null;
  fieldGoalAttemptedYards?: number | null;
  fieldGoalAttemptedYardsPer5Yards?: number | null;
  fieldGoalAttemptedYardsPer10Yards?: number | null;
  fieldGoalAttemptedYardsPer20Yards?: number | null;
  madeExtraPoints?: number | null;
  attemptedExtraPoints?: number | null;
  defensiveInterceptions?: number | null;
  defensiveSacks?: number | null;
  defensiveHalfSacks?: number | null;
  defensiveAssistedTackles?: number | null;
  defensiveSoloTackles?: number | null;
  defensiveTotalTackles?: number | null;
  defensiveTacklesPer3Tackles?: number | null;
  defensiveTacklesPer5Tackles?: number | null;
  defensiveStuffs?: number | null;
  puntReturnYards?: number | null;
  defensivePointsAllowed?: number | null;
  defensive0PointsAllowed?: number | null;
  defensive1To6PointsAllowed?: number | null;
  defensive7To13PointsAllowed?: number | null;
  defensive14To17PointsAllowed?: number | null;
  defensive18To21PointsAllowed?: number | null;
  defensive22To27PointsAllowed?: number | null;
  defensive28To34PointsAllowed?: number | null;
  defensive35To45PointsAllowed?: number | null;
  defensiveYardsAllowed?: number | null;
  defensiveLessThan100YardsAllowed?: number | null;
  defensive100To199YardsAllowed?: number | null;
  defensive200To299YardsAllowed?: number | null;
  defensive350To399YardsAllowed?: number | null;
  defensive400To449YardsAllowed?: number | null;
  defensive450To499YardsAllowed?: number | null;
  defensive500To549YardsAllowed?: number | null;
  defensiveOver550YardsAllowed?: number | null;
  defensiveFumbles?: number | null;
  defensiveBlockedKicks?: number | null;
  interceptionReturnTouchdown?: number | null;
  totalReturnTouchdowns?: number | null;
  defensiveForcedFumbles?: number | null;
  kickoffReturnYards?: number | null;
}
export interface ProjectedRawStats {
  usesPoints: boolean;
  rushingAttempts?: number | null;
  rushingYards?: number | null;
  rushingTouchdowns?: number | null;
  rushing2PtConversions?: number | null;
  rushingYardsPer5Yards?: number | null;
  rushingYardsPer10Yards?: number | null;
  rushingYardsPer20Yards?: number | null;
  rushingYardsPer25Yards?: number | null;
  rushingYardsPer50Yards?: number | null;
  rushingAttemptsPer5Attempts?: number | null;
  rushingAttemptsPer10Attempts?: number | null;
  rushingTouchdowns40Plus?: number | null;
  rushingTouchdowns50Plus?: number | null;
  rushingGame100To199Yards?: number | null;
  rushingGame200PlusYards?: number | null;
  rushingYardsPerAttempt?: number | null;
  receivingYards?: number | null;
  receivingTouchdowns?: number | null;
  receiving2PtConversions?: number | null;
  receivingTouchdowns40Plus?: number | null;
  receivingTouchdowns50Plus?: number | null;
  receivingYardsPer5Yards?: number | null;
  receivingYardsPer10Yards?: number | null;
  receivingYardsPer20Yards?: number | null;
  receivingYardsPer25Yards?: number | null;
  receivingReceptions?: number | null;
  receivingTargets?: number | null;
  receivingYardsPerReception?: number | null;
  fumbles?: number | null;
  lostFumbles?: number | null;
  totalTurnovers?: number | null;
  passingAttempts?: number | null;
  passingCompletions?: number | null;
  passingIncompletions?: number | null;
  passingYards?: number | null;
  passingTouchdowns?: number | null;
  passingYardsPer5Yards?: number | null;
  passingYardsPer10Yards?: number | null;
  passingYardsPer20Yards?: number | null;
  passingYardsPer25Yards?: number | null;
  passingYardsPer50Yards?: number | null;
  passingYardsPer100Yards?: number | null;
  passingCompletionsPer5Completions?: number | null;
  passingCompletionsPer10Completions?: number | null;
  passingTouchdowns40Plus?: number | null;
  passingTouchdowns50Plus?: number | null;
  passingYards300To399?: number | null;
  passingYards400Plus?: number | null;
  passing2PtConversions?: number | null;
  passingInterceptions?: number | null;
  passingCompletionPercentage?: number | null;
  receivingYardsPer50Yards?: number | null;
  receptionsPer5Receptions?: number | null;
  madeFieldGoalsFrom50Plus?: number | null;
  attemptedFieldGoalsFrom50Plus?: number | null;
  missedFieldGoalsFrom50Plus?: number | null;
  madeFieldGoalsFrom50To59?: number | null;
  attemptedFieldGoalsFrom50To59?: number | null;
  missedFieldGoalsFrom50To59?: number | null;
  madeFieldGoalsFrom40To49?: number | null;
  attemptedFieldGoalsFrom40To49?: number | null;
  missedFieldGoalsFrom40To49?: number | null;
  madeFieldGoalsFromUnder40?: number | null;
  attemptFieldGoalsFromUnder40?: number | null;
  missedFieldGoalsFromUnder40?: number | null;
  madeFieldGoals?: number | null;
  attemptedFieldGoals?: number | null;
  missedFieldGoals?: number | null;
  fieldGoalMadeYards?: number | null;
  fieldGoalMadeYardsPer50Yards?: number | null;
  fieldGoalMissedYards?: number | null;
  fieldGoalMissedYardsPer50Yards?: number | null;
  fieldGoalAttemptedYards?: number | null;
  fieldGoalAttemptedYardsPer50Yards?: number | null;
  madeExtraPoints?: number | null;
  attemptedExtraPoints?: number | null;
  missedExtraPoints?: number | null;
  defensiveBlockedKickForTouchdowns?: number | null;
  defensiveInterceptions?: number | null;
  defensiveFumbles?: number | null;
  defensiveBlockedKicks?: number | null;
  defensiveSafeties?: number | null;
  defensiveSacks?: number | null;
  defensiveHalfSacks?: number | null;
  kickoffReturnTouchdown?: number | null;
  puntReturnTouchdown?: number | null;
  fumbleReturnTouchdown?: number | null;
  interceptionReturnTouchdown?: number | null;
  totalReturnTouchdowns?: number | null;
  defensiveForcedFumbles?: number | null;
  defensiveTotalTackles?: number | null;
  defensiveTacklesPer3Tackles?: number | null;
  defensiveTacklesPer5Tackles?: number | null;
  kickoffReturnYards?: number | null;
  puntReturnYards?: number | null;
  defensivePointsAllowed?: number | null;
  defensive0PointsAllowed?: number | null;
  defensive1To6PointsAllowed?: number | null;
  defensive7To13PointsAllowed?: number | null;
  defensive14To17PointsAllowed?: number | null;
  defensive18To21PointsAllowed?: number | null;
  defensive22To27PointsAllowed?: number | null;
  defensive28To34PointsAllowed?: number | null;
  defensive35To45PointsAllowed?: number | null;
  defensiveOver45PointsAllowed?: number | null;
  defensiveYardsAllowed?: number | null;
  defensive100To199YardsAllowed?: number | null;
  defensive200To299YardsAllowed?: number | null;
  defensive350To399YardsAllowed?: number | null;
  defensive400To449YardsAllowed?: number | null;
  defensive450To499YardsAllowed?: number | null;
  defensive500To549YardsAllowed?: number | null;
  defensiveOver550YardsAllowed?: number | null;
}
export interface AwayRosterEntity {
  seasonId: number;
  scoringPeriodId: number;
  id: number;
  firstName: string;
  fullName: string;
  lastName: string;
  proTeam: string;
  proTeamAbbreviation: string;
  defaultPosition: string;
  eligiblePositions?: string[] | null;
  availabilityStatus: string;
  isDroppable: boolean;
  isInjured: boolean;
  injuryStatus: string;
  rosteredPosition: string;
  totalPoints: number;
  pointBreakdown: PointBreakdown1;
  projectedPointBreakdown: ProjectedPointBreakdown;
  rawStats: RawStats1;
  projectedRawStats: ProjectedRawStats;
}
export interface PointBreakdown1 {
  usesPoints: boolean;
  receivingYards?: number | null;
  receivingReceptions?: number | null;
  rushingYards?: number | null;
  passingYards?: number | null;
  passingTouchdowns?: number | null;
  passing2PtConversions?: number | null;
  passingInterceptions?: number | null;
  defensiveInterceptions?: number | null;
  defensiveSacks?: number | null;
  defensive0PointsAllowed?: number | null;
  defensive1To6PointsAllowed?: number | null;
  defensive7To13PointsAllowed?: number | null;
  defensive14To17PointsAllowed?: number | null;
  defensive28To34PointsAllowed?: number | null;
  defensive35To45PointsAllowed?: number | null;
  defensiveLessThan100YardsAllowed?: number | null;
  defensive100To199YardsAllowed?: number | null;
  defensive200To299YardsAllowed?: number | null;
  defensive350To399YardsAllowed?: number | null;
  defensive400To449YardsAllowed?: number | null;
  defensive450To499YardsAllowed?: number | null;
  defensive500To549YardsAllowed?: number | null;
  defensiveOver550YardsAllowed?: number | null;
  receivingTouchdowns?: number | null;
  rushingTouchdowns?: number | null;
  madeFieldGoalsFromUnder40?: number | null;
  madeExtraPoints?: number | null;
}
export interface RawStats1 {
  usesPoints: boolean;
  receivingYards?: number | null;
  receivingYardsPer5Yards?: number | null;
  receivingYardsPer10Yards?: number | null;
  receivingYardsPer20Yards?: number | null;
  receivingYardsPer25Yards?: number | null;
  receivingYardsPer50Yards?: number | null;
  receivingReceptions?: number | null;
  receptionsPer5Receptions?: number | null;
  receivingTargets?: number | null;
  receivingYardsAfterCatch?: number | null;
  receivingYardsPerReception?: number | null;
  teamLoss?: number | null;
  receivingTouchdowns40Plus?: number | null;
  receivingYardsPer100Yards?: number | null;
  receptionsPer10Receptions?: number | null;
  rushingAttempts?: number | null;
  rushingYards?: number | null;
  rushingYardsPer5Yards?: number | null;
  rushingYardsPer10Yards?: number | null;
  rushingYardsPer20Yards?: number | null;
  rushingYardsPer25Yards?: number | null;
  rushingAttemptsPer5Attempts?: number | null;
  rushingYardsPerAttempt?: number | null;
  rushingYardsPer50Yards?: number | null;
  rushingYardsPer100Yards?: number | null;
  rushingAttemptsPer10Attempts?: number | null;
  rushingGame100To199Yards?: number | null;
  teamWin?: number | null;
  passingAttempts?: number | null;
  passingCompletions?: number | null;
  passingIncompletions?: number | null;
  passingYards?: number | null;
  passingTouchdowns?: number | null;
  passingYardsPer5Yards?: number | null;
  passingYardsPer10Yards?: number | null;
  passingYardsPer20Yards?: number | null;
  passingYardsPer25Yards?: number | null;
  passingYardsPer50Yards?: number | null;
  passingYardsPer100Yards?: number | null;
  passingCompletionsPer5Completions?: number | null;
  passingCompletionsPer10Completions?: number | null;
  passingIncompletionsPer5Incompletions?: number | null;
  passingIncompletionsPer10Incompletions?: number | null;
  passingYards300To399?: number | null;
  passing2PtConversions?: number | null;
  passingInterceptions?: number | null;
  passingCompletionPercentage?: number | null;
  fumbles?: number | null;
  totalTurnovers?: number | null;
  teamPointsScored?: number | null;
  defensiveSoloTackles?: number | null;
  defensiveTotalTackles?: number | null;
  defensiveInterceptions?: number | null;
  defensiveSacks?: number | null;
  defensiveHalfSacks?: number | null;
  defensiveForcedFumbles?: number | null;
  defensiveAssistedTackles?: number | null;
  defensiveTacklesPer3Tackles?: number | null;
  defensiveTacklesPer5Tackles?: number | null;
  defensiveStuffs?: number | null;
  defensivePointsAllowed?: number | null;
  defensive0PointsAllowed?: number | null;
  defensive1To6PointsAllowed?: number | null;
  defensive7To13PointsAllowed?: number | null;
  defensive14To17PointsAllowed?: number | null;
  defensive18To21PointsAllowed?: number | null;
  defensive22To27PointsAllowed?: number | null;
  defensive28To34PointsAllowed?: number | null;
  defensive35To45PointsAllowed?: number | null;
  defensiveYardsAllowed?: number | null;
  defensiveLessThan100YardsAllowed?: number | null;
  defensive100To199YardsAllowed?: number | null;
  defensive200To299YardsAllowed?: number | null;
  defensive350To399YardsAllowed?: number | null;
  defensive400To449YardsAllowed?: number | null;
  defensive450To499YardsAllowed?: number | null;
  defensive500To549YardsAllowed?: number | null;
  defensiveOver550YardsAllowed?: number | null;
  receivingTouchdowns?: number | null;
  rushingTouchdowns?: number | null;
  madeFieldGoalsFromUnder40?: number | null;
  attemptFieldGoalsFromUnder40?: number | null;
  madeFieldGoals?: number | null;
  attemptedFieldGoals?: number | null;
  fieldGoalMadeYards?: number | null;
  fieldGoalMadeYardsPer5Yards?: number | null;
  fieldGoalMadeYardsPer10Yards?: number | null;
  fieldGoalMadeYardsPer20Yards?: number | null;
  fieldGoalMadeYardsPer25Yards?: number | null;
  fieldGoalMadeYardsPer50Yards?: number | null;
  fieldGoalAttemptedYards?: number | null;
  fieldGoalAttemptedYardsPer5Yards?: number | null;
  fieldGoalAttemptedYardsPer10Yards?: number | null;
  fieldGoalAttemptedYardsPer20Yards?: number | null;
  fieldGoalAttemptedYardsPer25Yards?: number | null;
  fieldGoalAttemptedYardsPer50Yards?: number | null;
  madeExtraPoints?: number | null;
  attemptedExtraPoints?: number | null;
}
