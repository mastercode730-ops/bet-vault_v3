'use client';

import React, { useState, useMemo } from 'react';
import { MATH, MatchNrrInput } from '@/lib/runRateMath';

export default function RunRateCalculator() {
  const [activeTab, setActiveTab] = useState<'chase' | 'nrr' | 'annualize'>('chase');

  // --- Chase Calculator State ---
  const [oversTotal, setOversTotal] = useState<number>(20);
  const [oversBowledStr, setOversBowledStr] = useState<string>('12.3');
  const [currentRuns, setCurrentRuns] = useState<number>(98);
  const [targetRuns, setTargetRuns] = useState<number>(176);
  const [wickets, setWickets] = useState<number>(4);

  // Validation & Calculation for Chase
  const parsedBalls = useMemo(() => {
    return MATH.parseOvers(oversBowledStr);
  }, [oversBowledStr]);

  const isOversInvalid = isNaN(parsedBalls);

  const chaseResult = useMemo(() => {
    if (isOversInvalid) return null;
    return MATH.chase({
      overs: oversTotal,
      balls: parsedBalls,
      runs: currentRuns,
      target: targetRuns,
      wkts: wickets,
    });
  }, [oversTotal, parsedBalls, currentRuns, targetRuns, wickets, isOversInvalid]);

  // --- NRR Calculator State ---
  const [matches, setMatches] = useState<Array<{ id: number; rf: number; ovF: string; ra: number; ovA: string }>>([
    { id: 1, rf: 182, ovF: '20.0', ra: 165, ovA: '18.4' },
    { id: 2, rf: 148, ovF: '17.3', ra: 147, ovA: '20.0' },
    { id: 3, rf: 119, ovF: '20.0', ra: 124, ovA: '15.1' },
  ]);

  const nrrData = useMemo(() => {
    let hasError = false;
    const formattedMatches: MatchNrrInput[] = matches.map((m) => {
      const bf = MATH.parseOvers(m.ovF);
      const bb = MATH.parseOvers(m.ovA);
      if (isNaN(bf) || isNaN(bb)) hasError = true;
      return {
        rf: m.rf,
        bf: isNaN(bf) ? 0 : bf,
        ra: m.ra,
        bb: isNaN(bb) ? 0 : bb,
      };
    });

    return {
      hasError,
      res: MATH.nrr(formattedMatches),
    };
  }, [matches]);

  const addMatch = () => {
    const nextId = matches.length > 0 ? Math.max(...matches.map(m => m.id)) + 1 : 1;
    setMatches([...matches, { id: nextId, rf: 160, ovF: '20.0', ra: 150, ovA: '20.0' }]);
  };

  const removeMatch = (id: number) => {
    if (matches.length <= 1) return;
    setMatches(matches.filter(m => m.id !== id));
  };

  const updateMatch = (id: number, field: 'rf' | 'ovF' | 'ra' | 'ovA', value: any) => {
    setMatches(matches.map(m => m.id === id ? { ...m, [field]: value } : m));
  };

  // --- Annualize Calculator State ---
  const [annValue, setAnnValue] = useState<number>(58000);
  const [annPeriod, setAnnPeriod] = useState<number>(45);
  const [annUnit, setAnnUnit] = useState<string>('days');

  const annualizedResult = useMemo(() => {
    return MATH.annualize(annValue, annPeriod, annUnit);
  }, [annValue, annPeriod, annUnit]);

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(10,14,26,0.98) 100%)',
      border: '1px solid rgba(59,130,246,0.35)',
      borderRadius: '20px',
      padding: '28px',
      margin: '36px 0',
      boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
      fontFamily: 'inherit',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '24px', borderBottom: '1px solid rgba(59,130,246,0.18)', paddingBottom: '18px' }}>
        <div>
          <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#60A5FA', fontWeight: 700 }}>
            Interactive Cricket Math Hub
          </span>
          <h3 style={{ margin: '4px 0 0', color: '#FFFFFF', fontSize: '20px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>
            Live Run Rate & NRR Calculator
          </h3>
        </div>

        {/* Tab switchers */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', background: 'rgba(30,41,59,0.7)', padding: '4px', borderRadius: '12px', border: '1px solid rgba(59,130,246,0.2)' }}>
          <button
            onClick={() => setActiveTab('chase')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              background: activeTab === 'chase' ? '#2563EB' : 'transparent',
              color: activeTab === 'chase' ? '#FFFFFF' : '#94A3B8',
              transition: 'all 0.2s',
            }}
          >
            CRR & RRR (Chase)
          </button>
          <button
            onClick={() => setActiveTab('nrr')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              background: activeTab === 'nrr' ? '#2563EB' : 'transparent',
              color: activeTab === 'nrr' ? '#FFFFFF' : '#94A3B8',
              transition: 'all 0.2s',
            }}
          >
            Tournament NRR
          </button>
          <button
            onClick={() => setActiveTab('annualize')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              background: activeTab === 'annualize' ? '#2563EB' : 'transparent',
              color: activeTab === 'annualize' ? '#FFFFFF' : '#94A3B8',
              transition: 'all 0.2s',
            }}
          >
            Rate Projection
          </button>
        </div>
      </div>

      {/* Tab 1: Chase (CRR & RRR) */}
      {activeTab === 'chase' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '14px', marginBottom: '22px' }}>
            <div>
              <label style={{ display: 'block', color: '#94A3B8', fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>Total Overs</label>
              <input
                type="number"
                value={oversTotal}
                onChange={(e) => setOversTotal(Math.max(1, Number(e.target.value)))}
                style={{ width: '100%', padding: '10px 12px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '8px', color: '#FFF', fontSize: '14px', fontWeight: 600 }}
              />
            </div>
            <div>
              <label style={{ display: 'block', color: '#94A3B8', fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>Overs Bowled (e.g. 12.3)</label>
              <input
                type="text"
                value={oversBowledStr}
                onChange={(e) => setOversBowledStr(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'rgba(15,23,42,0.8)',
                  border: isOversInvalid ? '1px solid #EF4444' : '1px solid rgba(59,130,246,0.3)',
                  borderRadius: '8px',
                  color: isOversInvalid ? '#F87171' : '#FFF',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', color: '#94A3B8', fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>Current Runs</label>
              <input
                type="number"
                value={currentRuns}
                onChange={(e) => setCurrentRuns(Number(e.target.value))}
                style={{ width: '100%', padding: '10px 12px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '8px', color: '#FFF', fontSize: '14px', fontWeight: 600 }}
              />
            </div>
            <div>
              <label style={{ display: 'block', color: '#94A3B8', fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>Target Score</label>
              <input
                type="number"
                value={targetRuns}
                onChange={(e) => setTargetRuns(Number(e.target.value))}
                style={{ width: '100%', padding: '10px 12px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '8px', color: '#FFF', fontSize: '14px', fontWeight: 600 }}
              />
            </div>
            <div>
              <label style={{ display: 'block', color: '#94A3B8', fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>Wickets Lost</label>
              <input
                type="number"
                value={wickets}
                max={10}
                min={0}
                onChange={(e) => setWickets(Math.min(10, Math.max(0, Number(e.target.value))))}
                style={{ width: '100%', padding: '10px 12px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '8px', color: '#FFF', fontSize: '14px', fontWeight: 600 }}
              />
            </div>
          </div>

          {isOversInvalid && (
            <div style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', borderRadius: '10px', padding: '10px 14px', color: '#FCA5A5', fontSize: '13px', marginBottom: '18px' }}>
              ⚠️ Invalid cricket over: The ball count must be between 0 and 5 (e.g. 12.3 is valid, but 12.7 is invalid).
            </div>
          )}

          {/* Results Display */}
          {chaseResult && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
              <div style={{ background: 'rgba(30,58,138,0.25)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#93C5FD', fontWeight: 700 }}>Current RR (CRR)</span>
                <div style={{ fontSize: '26px', fontWeight: 800, color: '#60A5FA', marginTop: '4px', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {chaseResult.crr.toFixed(2)}
                </div>
                <span style={{ fontSize: '11px', color: '#64748B' }}>runs / over</span>
              </div>

              <div style={{ background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#FCD34D', fontWeight: 700 }}>Required RR (RRR)</span>
                <div style={{ fontSize: '26px', fontWeight: 800, color: '#F59E0B', marginTop: '4px', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {isFinite(chaseResult.rrr) ? chaseResult.rrr.toFixed(2) : '—'}
                </div>
                <span style={{ fontSize: '11px', color: '#64748B' }}>needed per over</span>
              </div>

              <div style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#6EE7B7', fontWeight: 700 }}>Runs Needed</span>
                <div style={{ fontSize: '26px', fontWeight: 800, color: '#10B981', marginTop: '4px', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {chaseResult.needed}
                </div>
                <span style={{ fontSize: '11px', color: '#64748B' }}>to win match</span>
              </div>

              <div style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#A5B4FC', fontWeight: 700 }}>Balls Remaining</span>
                <div style={{ fontSize: '26px', fontWeight: 800, color: '#818CF8', marginTop: '4px', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {chaseResult.left}
                </div>
                <span style={{ fontSize: '11px', color: '#64748B' }}>({chaseResult.oversLeft} overs)</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Tournament NRR */}
      {activeTab === 'nrr' && (
        <div>
          <p style={{ color: '#94A3B8', fontSize: '13px', margin: '0 0 16px' }}>
            Enter team runs scored vs overs faced, and opponent runs conceded vs overs bowled for each tournament match.
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '18px', borderRadius: '10px', border: '1px solid rgba(59,130,246,0.2)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: 'rgba(30,58,138,0.3)', borderBottom: '1px solid rgba(59,130,246,0.2)' }}>
                  <th style={{ padding: '10px 12px', color: '#93C5FD' }}>Match #</th>
                  <th style={{ padding: '10px 12px', color: '#93C5FD' }}>Runs For (Scored)</th>
                  <th style={{ padding: '10px 12px', color: '#93C5FD' }}>Overs Faced</th>
                  <th style={{ padding: '10px 12px', color: '#93C5FD' }}>Runs Against (Conceded)</th>
                  <th style={{ padding: '10px 12px', color: '#93C5FD' }}>Overs Bowled</th>
                  <th style={{ padding: '10px 12px', color: '#93C5FD', textAlign: 'center' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {matches.map((m, idx) => (
                  <tr key={m.id} style={{ borderBottom: '1px solid rgba(59,130,246,0.1)' }}>
                    <td style={{ padding: '8px 12px', color: '#FFF', fontWeight: 700 }}>Match {idx + 1}</td>
                    <td style={{ padding: '8px 12px' }}>
                      <input
                        type="number"
                        value={m.rf}
                        onChange={(e) => updateMatch(m.id, 'rf', Number(e.target.value))}
                        style={{ width: '90px', padding: '6px 8px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: '6px', color: '#FFF' }}
                      />
                    </td>
                    <td style={{ padding: '8px 12px' }}>
                      <input
                        type="text"
                        value={m.ovF}
                        onChange={(e) => updateMatch(m.id, 'ovF', e.target.value)}
                        style={{ width: '90px', padding: '6px 8px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: '6px', color: '#FFF' }}
                      />
                    </td>
                    <td style={{ padding: '8px 12px' }}>
                      <input
                        type="number"
                        value={m.ra}
                        onChange={(e) => updateMatch(m.id, 'ra', Number(e.target.value))}
                        style={{ width: '90px', padding: '6px 8px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: '6px', color: '#FFF' }}
                      />
                    </td>
                    <td style={{ padding: '8px 12px' }}>
                      <input
                        type="text"
                        value={m.ovA}
                        onChange={(e) => updateMatch(m.id, 'ovA', e.target.value)}
                        style={{ width: '90px', padding: '6px 8px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: '6px', color: '#FFF' }}
                      />
                    </td>
                    <td style={{ padding: '8px 12px', textAlign: 'center' }}>
                      <button
                        onClick={() => removeMatch(m.id)}
                        disabled={matches.length <= 1}
                        style={{
                          background: 'rgba(239,68,68,0.2)',
                          color: '#F87171',
                          border: '1px solid rgba(239,68,68,0.3)',
                          borderRadius: '6px',
                          padding: '4px 10px',
                          cursor: matches.length <= 1 ? 'not-allowed' : 'pointer',
                          fontSize: '12px',
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <button
              onClick={addMatch}
              style={{
                background: 'rgba(59,130,246,0.2)',
                color: '#60A5FA',
                border: '1px solid rgba(59,130,246,0.4)',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              + Add Match
            </button>

            {/* NRR summary box */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block' }}>Batting Rate: {nrrData.res.battingRate}</span>
                <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block' }}>Bowling Rate: {nrrData.res.bowlingRate}</span>
              </div>
              <div style={{
                background: nrrData.res.nrr >= 0 ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)',
                border: nrrData.res.nrr >= 0 ? '1px solid rgba(16,185,129,0.4)' : '1px solid rgba(239,68,68,0.4)',
                padding: '12px 20px',
                borderRadius: '12px',
                textAlign: 'center',
              }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: nrrData.res.nrr >= 0 ? '#6EE7B7' : '#FCA5A5', fontWeight: 700, display: 'block' }}>
                  Tournament NRR
                </span>
                <div style={{ fontSize: '24px', fontWeight: 800, color: nrrData.res.nrr >= 0 ? '#10B981' : '#EF4444', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {nrrData.res.formattedNrr}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Rate Projection / Annualize */}
      {activeTab === 'annualize' && (
        <div>
          <p style={{ color: '#94A3B8', fontSize: '13px', margin: '0 0 16px' }}>
            Scale any rate, run progression, or statistical metric observed over a specific duration into an annualized / extrapolated annual projection.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px', marginBottom: '22px' }}>
            <div>
              <label style={{ display: 'block', color: '#94A3B8', fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>Observed Value</label>
              <input
                type="number"
                value={annValue}
                onChange={(e) => setAnnValue(Number(e.target.value))}
                style={{ width: '100%', padding: '10px 12px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '8px', color: '#FFF', fontSize: '14px', fontWeight: 600 }}
              />
            </div>
            <div>
              <label style={{ display: 'block', color: '#94A3B8', fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>Period Duration</label>
              <input
                type="number"
                value={annPeriod}
                onChange={(e) => setAnnPeriod(Math.max(1, Number(e.target.value)))}
                style={{ width: '100%', padding: '10px 12px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '8px', color: '#FFF', fontSize: '14px', fontWeight: 600 }}
              />
            </div>
            <div>
              <label style={{ display: 'block', color: '#94A3B8', fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>Time Unit</label>
              <select
                value={annUnit}
                onChange={(e) => setAnnUnit(e.target.value)}
                style={{ width: '100%', padding: '10px 12px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '8px', color: '#FFF', fontSize: '14px', fontWeight: 600 }}
              >
                <option value="days">Days (365 / yr)</option>
                <option value="weeks">Weeks (52 / yr)</option>
                <option value="months">Months (12 / yr)</option>
                <option value="quarters">Quarters (4 / yr)</option>
                <option value="years">Years (1 / yr)</option>
              </select>
            </div>
          </div>

          <div style={{ background: 'rgba(30,58,138,0.25)', border: '1px solid rgba(59,130,246,0.35)', borderRadius: '14px', padding: '20px', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', color: '#93C5FD', fontWeight: 700 }}>Annualized Projected Rate</span>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#60A5FA', marginTop: '6px', fontFamily: 'Space Grotesk, sans-serif' }}>
              {annualizedResult.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </div>
            <span style={{ fontSize: '12px', color: '#64748B' }}>
              scaled from {annValue.toLocaleString()} over {annPeriod} {annUnit}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
