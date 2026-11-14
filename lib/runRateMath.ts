/**
 * Cricket Run Rate & Tournament Mathematics Utility
 * Implements:
 * - MATH.parseOvers(overs): Converts cricket overs (e.g., '12.3') into total balls. Rejects invalid balls (>= 6).
 * - MATH.annualize(value, period, unit): Scales a rate/value across time units to an annualized basis.
 * - MATH.chase(options): Computes CRR, RRR, balls left, and runs needed in an innings chase.
 * - MATH.nrr(matches): Computes cumulative tournament Net Run Rate across multiple matches.
 */

export interface ChaseOptions {
  overs: number;
  balls: number;
  runs: number;
  target: number;
  wkts?: number;
}

export interface ChaseResult {
  crr: number;
  left: number;
  rrr: number;
  needed: number;
  ballsLeft: number;
  oversLeft: number;
  oversBowled: number;
  runsNeeded: number;
  target: number;
  runs: number;
  wkts?: number;
  totalBalls: number;
  overs: number;
}

export interface MatchNrrInput {
  rf: number; // Runs scored (for)
  bf: number; // Balls faced
  ra: number; // Runs conceded (against)
  bb: number; // Balls bowled
}

export interface NrrResult {
  nrr: number;
  rawNrr: number;
  formattedNrr: string;
  runsFor: number;
  ballsFor: number;
  oversFor: number;
  runsAgainst: number;
  ballsAgainst: number;
  oversAgainst: number;
  battingRate: number;
  bowlingRate: number;
}

// MATH-START
export const MATH = {
  parseOvers(overs: string | number): number {
    if (overs === null || overs === undefined || overs === '') return 0;
    const str = String(overs).trim();
    if (!str) return 0;
    if (!/^\d+(\.\d+)?$/.test(str)) return NaN;
    const parts = str.split('.');
    const o = parseInt(parts[0], 10);
    if (parts.length === 1) return o * 6;
    const b = parseInt(parts[1], 10);
    if (b >= 6 || b < 0) return NaN;
    return o * 6 + b;
  },

  annualize(value: number, period: number, unit: string): number {
    if (!period || period <= 0 || isNaN(value) || isNaN(period)) return 0;
    const u = String(unit).toLowerCase().trim();
    let factor = 1;
    if (u.startsWith('day')) factor = 365;
    else if (u.startsWith('week')) factor = 52;
    else if (u.startsWith('month')) factor = 12;
    else if (u.startsWith('quarter')) factor = 4;
    else if (u.startsWith('year')) factor = 1;
    return (value / period) * factor;
  },

  chase(options: ChaseOptions): ChaseResult {
    const overs = Number(options.overs) || 20;
    const balls = Number(options.balls) || 0;
    const runs = Number(options.runs) || 0;
    const target = Number(options.target) || 0;
    const wkts = options.wkts !== undefined ? Number(options.wkts) : 0;

    const totalBalls = overs * 6;
    const ballsLeft = Math.max(0, totalBalls - balls);
    const needed = Math.max(0, target - runs);
    const oversBowled = balls / 6;
    const oversLeft = ballsLeft / 6;

    const crr = oversBowled > 0 ? Number(((runs / balls) * 6).toFixed(2)) : 0;
    const rrr = oversLeft > 0 ? Number(((needed / ballsLeft) * 6).toFixed(2)) : (needed <= 0 ? 0 : Infinity);

    return {
      crr,
      left: ballsLeft,
      rrr,
      needed,
      ballsLeft,
      oversLeft: Number(oversLeft.toFixed(2)),
      oversBowled: Number(oversBowled.toFixed(2)),
      runsNeeded: needed,
      target,
      runs,
      wkts,
      totalBalls,
      overs,
    };
  },

  nrr(matches: MatchNrrInput[]): NrrResult {
    if (!Array.isArray(matches) || matches.length === 0) {
      return {
        nrr: 0,
        rawNrr: 0,
        formattedNrr: '+0.000',
        runsFor: 0,
        ballsFor: 0,
        oversFor: 0,
        runsAgainst: 0,
        ballsAgainst: 0,
        oversAgainst: 0,
        battingRate: 0,
        bowlingRate: 0,
      };
    }

    let totalRf = 0;
    let totalBf = 0;
    let totalRa = 0;
    let totalBb = 0;

    for (const m of matches) {
      totalRf += Number(m.rf) || 0;
      totalBf += Number(m.bf) || 0;
      totalRa += Number(m.ra) || 0;
      totalBb += Number(m.bb) || 0;
    }

    const oversFor = totalBf / 6;
    const oversAgainst = totalBb / 6;
    const battingRate = oversFor > 0 ? totalRf / oversFor : 0;
    const bowlingRate = oversAgainst > 0 ? totalRa / oversAgainst : 0;
    const diff = battingRate - bowlingRate;

    return {
      nrr: Number(diff.toFixed(3)),
      rawNrr: diff,
      formattedNrr: (diff >= 0 ? '+' : '') + diff.toFixed(3),
      runsFor: totalRf,
      ballsFor: totalBf,
      oversFor: Number(oversFor.toFixed(2)),
      runsAgainst: totalRa,
      ballsAgainst: totalBb,
      oversAgainst: Number(oversAgainst.toFixed(2)),
      battingRate: Number(battingRate.toFixed(3)),
      bowlingRate: Number(bowlingRate.toFixed(3)),
    };
  },
};
// MATH-END

export const { parseOvers, annualize, chase, nrr } = MATH;
