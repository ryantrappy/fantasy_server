export interface SleeperLeague {
  total_rosters: number;
  status: string;
  sport: string;
  shard: number;
  settings: SleeperLeagueSettings;
  season_type: string;
  season: string;
  scoring_settings: SleeperScoringSettings;
  roster_positions?: string[] | null;
  previous_league_id?: null;
  name: string;
  metadata: SleeperMetadata;
  loser_bracket_id?: null;
  league_id: string;
  last_transaction_id?: null;
  last_read_id: string;
  last_pinned_message_id?: null;
  last_message_time: number;
  last_message_text_map?: null;
  last_message_id: string;
  last_message_attachment?: null;
  last_author_is_bot: boolean;
  last_author_id: string;
  last_author_display_name: string;
  last_author_avatar?: null;
  group_id?: null;
  draft_id: string;
  display_order: number;
  company_id?: null;
  bracket_id?: null;
  avatar?: null;
}
export interface SleeperLeagueSettings {
  max_keepers: number;
  draft_rounds: number;
  trade_review_days: number;
  reserve_allow_dnr: number;
  capacity_override: number;
  pick_trading: number;
  disable_trades: number;
  taxi_years: number;
  taxi_allow_vets: number;
  best_ball: number;
  last_report: number;
  disable_adds: number;
  waiver_type: number;
  bench_lock: number;
  reserve_allow_sus: number;
  type: number;
  reserve_allow_cov: number;
  waiver_clear_days: number;
  daily_waivers_last_ran: number;
  waiver_day_of_week: number;
  start_week: number;
  playoff_teams: number;
  num_teams: number;
  reserve_slots: number;
  playoff_round_type: number;
  daily_waivers_hour: number;
  waiver_budget: number;
  reserve_allow_out: number;
  offseason_adds: number;
  last_scored_leg: number;
  playoff_seed_type: number;
  daily_waivers: number;
  divisions: number;
  playoff_week_start: number;
  daily_waivers_days: number;
  league_average_match: number;
  leg: number;
  trade_deadline: number;
  reserve_allow_doubtful: number;
  taxi_deadline: number;
  reserve_allow_na: number;
  taxi_slots: number;
  playoff_type: number;
}
export interface SleeperScoringSettings {
  pass_2pt: number;
  pass_int: number;
  fgmiss: number;
  rec_yd: number;
  xpmiss: number;
  fgm_30_39: number;
  blk_kick: number;
  pts_allow_7_13: number;
  ff: number;
  fgm_20_29: number;
  fgm_40_49: number;
  pts_allow_1_6: number;
  st_fum_rec: number;
  def_st_ff: number;
  st_ff: number;
  pts_allow_28_34: number;
  fgm_50p: number;
  fum_rec: number;
  def_td: number;
  fgm_0_19: number;
  int: number;
  pts_allow_0: number;
  pts_allow_21_27: number;
  rec_2pt: number;
  rec: number;
  xpm: number;
  st_td: number;
  def_st_fum_rec: number;
  def_st_td: number;
  sack: number;
  fum_rec_td: number;
  rush_2pt: number;
  rec_td: number;
  pts_allow_35p: number;
  pts_allow_14_20: number;
  rush_yd: number;
  pass_yd: number;
  pass_td: number;
  rush_td: number;
  fum_lost: number;
  fum: number;
  safe: number;
}
export interface SleeperMetadata {
  division_2: string;
  division_1: string;
}

export interface SleeperLeagueUser {
  user_id: string;
  settings?: null;
  metadata: SleeperUserMetadata;
  league_id: string;
  is_owner: boolean;
  is_bot: boolean;
  display_name: string;
  avatar: string;
}
export interface SleeperUserMetadata {
  mascot_item_type_id_leg_6: string;
  mascot_item_type_id_leg_10: string;
  mascot_item_type_id_leg_18: string;
  team_name_update: string;
  mention_pn: string;
  show_mascots: string;
  mascot_item_type_id_leg_5: string;
  mascot_item_type_id_leg_13: string;
  team_name: string;
  allow_pn: string;
  mascot_item_type_id_leg_9: string;
  mascot_item_type_id_leg_8: string;
  mascot_item_type_id_leg_7: string;
  mascot_item_type_id_leg_17: string;
  mascot_item_type_id_leg_12: string;
  mascot_item_type_id_leg_15: string;
  trade_block_pn: string;
  join_voice_pn: string;
  user_message_pn: string;
  transaction_commissioner: string;
  transaction_free_agent: string;
  allow_sms: string;
  mascot_item_type_id_leg_4: string;
  transaction_trade: string;
  transaction_waiver: string;
  mascot_message_emotion_leg_1: string;
  mascot_item_type_id_leg_16: string;
  mascot_item_type_id_leg_11: string;
  mascot_item_type_id_leg_1: string;
  player_like_pn: string;
  mascot_item_type_id_leg_3: string;
  avatar: string;
  mascot_message: string;
  mascot_item_type_id_leg_14: string;
  player_nickname_update: string;
  mascot_item_type_id_leg_2: string;
}

export interface SleeperUserRoster {
  taxi?: null;
  starters?: string[] | null;
  settings: SleeperUserSettings;
  roster_id: number;
  reserve?: null;
  players?: string[] | null;
  player_map?: null;
  owner_id: string;
  metadata: Metadata;
  league_id: string;
  co_owners?: null;
}
export interface SleeperUserSettings {
  wins: number;
  waiver_position: number;
  waiver_budget_used: number;
  total_moves: number;
  ties: number;
  ppts_decimal: number;
  ppts: number;
  losses: number;
  fpts_decimal: number;
  fpts_against_decimal: number;
  fpts_against: number;
  fpts: number;
  division: number;
}
export interface Metadata {
  streak: string;
  record: string;
}
