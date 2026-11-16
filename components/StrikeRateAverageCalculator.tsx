'use client';

import React, { useState, useMemo } from 'react';
import { MATH } from '@/lib/runRateMath';

export default function StrikeRateAverageCalculator() {
  const [activeTab, setActiveTab] = useState<'batting' | 'bowling'>('batting');

  // --- Batting Inputs ---
  const [batRuns, setBatRuns] = useState<number>(450);
  const [batInnings, setBatInnings] = useState<number>(14);
  const [batNotOuts, setBatNotOuts] = useState<number>(4);
  const [batBalls, setBatBalls] = useState<number>(300);

  // Batting calculations
  const battingResults = useMemo(() => {
    const dismissals = Math.max(0, batInnings - batNotOuts);
    const average = dismissals > 0 ? Number((batRuns / dismissals).toFixed(2)) : null;
    const strikeRate = batBalls > 0 ? Number(((batRuns / batBalls) * 100).toFixed(2)) : 0;
    const basra = average !== null ? Number((average + strikeRate).toFixed(2)) : null;
    const runsPerBall = batBalls > 0 ? Number((batRuns / batBalls).toFixed(2)) : 0;

    return {
      dismissals,
      average,
      strikeRate,
      basra,
      runsPerBall,
    };
  }, [batRuns, batInnings, batNotOuts, batBalls]);

  // --- Bowling Inputs ---
  const [bowlRuns, setBowlRuns] = useState<number>(320);
  const [bowlOversStr, setBowlOversStr] = useState<string>('34.4');
  const [bowlWickets, setBowlWickets] = useState<number>(15);

  // Bowling calculations
  const parsedBowlBalls = useMemo(() => {
    return MATH.parseOvers(bowlOversStr);
  }, [bowlOversStr]);

  const isBowlOversInvalid = isNaN(parsedBowlBalls);

  const bowlingResults = useMemo(() => {
    if (isBowlOversInvalid) return null;
    const legalBalls = parsedBowlBalls;
    const oversDecimal = legalBalls / 6;
    const average = bowlWickets > 0 ? Number((bowlRuns / bowlWickets).toFixed(2)) : null;
    const strikeRate = bowlWickets > 0 ? Number((legalBalls / bowlWickets).toFixed(2)) : null;
    const economy = oversDecimal > 0 ? Number((bowlRuns / oversDecimal).toFixed(2)) : 0;

    return {
      legalBalls,
      oversDecimal: Number(oversDecimal.toFixed(2)),
      average,
      strikeRate,
      economy,
    };
  }, [bowlRuns, parsedBowlBalls, bowlWickets, isBowlOversInvalid]);

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(10,14,26,0.98) 100%)',
        border: '1px solid rgba(59,130,246,0.35)',
        borderRadius: '20px',
        padding: '28px',
        margin: '36px 0',
        boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
        fontFamily: 'inherit',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px',
          marginBottom: '24px',
          borderBottom: '1px solid rgba(59,130,246,0.18)',
          paddingBottom: '18px',
        }}
      >
        <div>
          <span
            style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#60A5FA',
              fontWeight: 700,
            }}
          >
            Live Performance Metrics
          </span>
          <h3
            style={{
              margin: '4px 0 0',
              color: '#FFFFFF',
              fontSize: '20px',
              fontWeight: 800,
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            Cricket Strike Rate &amp; Average Calculator
          </h3>
        </div>

        {/* Tab switchers */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            background: 'rgba(30,41,59,0.7)',
            padding: '4px',
            borderRadius: '12px',
            border: '1px solid rgba(59,130,246,0.2)',
          }}
        >
          <button
            onClick={() => setActiveTab('batting')}
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              background: activeTab === 'batting' ? '#2563EB' : 'transparent',
              color: activeTab === 'batting' ? '#FFFFFF' : '#94A3B8',
              transition: 'all 0.2s',
            }}
          >
            🏏 Batting Metrics
          </button>
          <button
            onClick={() => setActiveTab('bowling')}
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              background: activeTab === 'bowling' ? '#2563EB' : 'transparent',
              color: activeTab === 'bowling' ? '#FFFFFF' : '#94A3B8',
              transition: 'all 0.2s',
            }}
          >
            🎯 Bowling Metrics
          </button>
        </div>
      </div>

      {/* Tab 1: Batting */}
      {activeTab === 'batting' && (
        <div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '14px',
              marginBottom: '22px',
            }}
          >
            <div>
              <label
                style={{
                  display: 'block',
                  color: '#94A3B8',
                  fontSize: '12px',
                  fontWeight: 600,
                  marginBottom: '6px',
                }}
              >
                Total Runs Scored
              </label>
              <input
                type="number"
                value={batRuns}
                onChange={(e) => setBatRuns(Math.max(0, Number(e.target.value)))}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'rgba(15,23,42,0.8)',
                  border: '1px solid rgba(59,130,246,0.3)',
                  borderRadius: '8px',
                  color: '#FFF',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  color: '#94A3B8',
                  fontSize: '12px',
                  fontWeight: 600,
                  marginBottom: '6px',
                }}
              >
                Innings Played
              </label>
              <input
                type="number"
                value={batInnings}
                onChange={(e) => setBatInnings(Math.max(1, Number(e.target.value)))}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'rgba(15,23,42,0.8)',
                  border: '1px solid rgba(59,130,246,0.3)',
                  borderRadius: '8px',
                  color: '#FFF',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  color: '#94A3B8',
                  fontSize: '12px',
                  fontWeight: 600,
                  marginBottom: '6px',
                }}
              >
                Not Out Innings (*)
              </label>
              <input
                type="number"
                value={batNotOuts}
                max={batInnings}
                min={0}
                onChange={(e) => setBatNotOuts(Math.min(batInnings, Math.max(0, Number(e.target.value))))}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'rgba(15,23,42,0.8)',
                  border: '1px solid rgba(59,130,246,0.3)',
                  borderRadius: '8px',
                  color: '#FFF',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  color: '#94A3B8',
                  fontSize: '12px',
                  fontWeight: 600,
                  marginBottom: '6px',
                }}
              >
                Balls Faced (Legal)
              </label>
              <input
                type="number"
                value={batBalls}
                onChange={(e) => setBatBalls(Math.max(1, Number(e.target.value)))}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'rgba(15,23,42,0.8)',
                  border: '1px solid rgba(59,130,246,0.3)',
                  borderRadius: '8px',
                  color: '#FFF',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              />
            </div>
          </div>

          {/* Results Display */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '14px',
            }}
          >
            <div
              style={{
                background: 'rgba(30,58,138,0.25)',
                border: '1px solid rgba(59,130,246,0.3)',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#93C5FD', fontWeight: 700 }}>
                Batting Average
              </span>
              <div
                style={{
                  fontSize: '26px',
                  fontWeight: 800,
                  color: '#60A5FA',
                  marginTop: '4px',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                {battingResults.average !== null ? battingResults.average.toFixed(2) : 'Undefined (N/A)'}
              </div>
              <span style={{ fontSize: '11px', color: '#64748B' }}>
                {battingResults.dismissals} dismissal{battingResults.dismissals === 1 ? '' : 's'}
              </span>
            </div>

            <div
              style={{
                background: 'rgba(16,185,129,0.15)',
                border: '1px solid rgba(16,185,129,0.3)',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#6EE7B7', fontWeight: 700 }}>
                Batting Strike Rate
              </span>
              <div
                style={{
                  fontSize: '26px',
                  fontWeight: 800,
                  color: '#10B981',
                  marginTop: '4px',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                {battingResults.strikeRate.toFixed(2)}
              </div>
              <span style={{ fontSize: '11px', color: '#64748B' }}>runs per 100 balls</span>
            </div>

            <div
              style={{
                background: 'rgba(217,119,6,0.15)',
                border: '1px solid rgba(245,158,11,0.3)',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#FCD34D', fontWeight: 700 }}>
                Basra Index (Avg + SR)
              </span>
              <div
                style={{
                  fontSize: '26px',
                  fontWeight: 800,
                  color: '#F59E0B',
                  marginTop: '4px',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                {battingResults.basra !== null ? battingResults.basra.toFixed(2) : '—'}
              </div>
              <span style={{ fontSize: '11px', color: '#64748B' }}>T20 balance index</span>
            </div>

            <div
              style={{
                background: 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.3)',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#A5B4FC', fontWeight: 700 }}>
                Scoring Velocity
              </span>
              <div
                style={{
                  fontSize: '26px',
                  fontWeight: 800,
                  color: '#818CF8',
                  marginTop: '4px',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                {battingResults.runsPerBall.toFixed(2)}
              </div>
              <span style={{ fontSize: '11px', color: '#64748B' }}>runs per legal ball</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Bowling */}
      {activeTab === 'bowling' && (
        <div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '14px',
              marginBottom: '22px',
            }}
          >
            <div>
              <label
                style={{
                  display: 'block',
                  color: '#94A3B8',
                  fontSize: '12px',
                  fontWeight: 600,
                  marginBottom: '6px',
                }}
              >
                Runs Conceded
              </label>
              <input
                type="number"
                value={bowlRuns}
                onChange={(e) => setBowlRuns(Math.max(0, Number(e.target.value)))}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'rgba(15,23,42,0.8)',
                  border: '1px solid rgba(59,130,246,0.3)',
                  borderRadius: '8px',
                  color: '#FFF',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  color: '#94A3B8',
                  fontSize: '12px',
                  fontWeight: 600,
                  marginBottom: '6px',
                }}
              >
                Overs Bowled (e.g. 34.4, 4.0)
              </label>
              <input
                type="text"
                value={bowlOversStr}
                onChange={(e) => setBowlOversStr(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'rgba(15,23,42,0.8)',
                  border: isBowlOversInvalid ? '1px solid #EF4444' : '1px solid rgba(59,130,246,0.3)',
                  borderRadius: '8px',
                  color: isBowlOversInvalid ? '#F87171' : '#FFF',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  color: '#94A3B8',
                  fontSize: '12px',
                  fontWeight: 600,
                  marginBottom: '6px',
                }}
              >
                Wickets Taken
              </label>
              <input
                type="number"
                value={bowlWickets}
                min={0}
                onChange={(e) => setBowlWickets(Math.max(0, Number(e.target.value)))}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'rgba(15,23,42,0.8)',
                  border: '1px solid rgba(59,130,246,0.3)',
                  borderRadius: '8px',
                  color: '#FFF',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              />
            </div>
          </div>

          {isBowlOversInvalid && (
            <div
              style={{
                background: 'rgba(239,68,68,0.15)',
                border: '1px solid rgba(239,68,68,0.4)',
                borderRadius: '10px',
                padding: '10px 14px',
                color: '#FCA5A5',
                fontSize: '13px',
                marginBottom: '18px',
              }}
            >
              ⚠️ Invalid cricket over: The ball count must be between 0 and 5 (e.g. 3.4 is valid, but 3.7 is invalid).
            </div>
          )}

          {/* Results Display */}
          {bowlingResults && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '14px',
              }}
            >
              <div
                style={{
                  background: 'rgba(30,58,138,0.25)',
                  border: '1px solid rgba(59,130,246,0.3)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#93C5FD', fontWeight: 700 }}>
                  Bowling Average
                </span>
                <div
                  style={{
                    fontSize: '26px',
                    fontWeight: 800,
                    color: '#60A5FA',
                    marginTop: '4px',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  {bowlingResults.average !== null ? bowlingResults.average.toFixed(2) : 'Undefined (0 wkts)'}
                </div>
                <span style={{ fontSize: '11px', color: '#64748B' }}>runs conceded / wicket</span>
              </div>

              <div
                style={{
                  background: 'rgba(217,119,6,0.15)',
                  border: '1px solid rgba(245,158,11,0.3)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#FCD34D', fontWeight: 700 }}>
                  Bowling Strike Rate
                </span>
                <div
                  style={{
                    fontSize: '26px',
                    fontWeight: 800,
                    color: '#F59E0B',
                    marginTop: '4px',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  {bowlingResults.strikeRate !== null ? bowlingResults.strikeRate.toFixed(2) : 'Undefined'}
                </div>
                <span style={{ fontSize: '11px', color: '#64748B' }}>legal balls / wicket</span>
              </div>

              <div
                style={{
                  background: 'rgba(16,185,129,0.15)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#6EE7B7', fontWeight: 700 }}>
                  Economy Rate
                </span>
                <div
                  style={{
                    fontSize: '26px',
                    fontWeight: 800,
                    color: '#10B981',
                    marginTop: '4px',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  {bowlingResults.economy.toFixed(2)}
                </div>
                <span style={{ fontSize: '11px', color: '#64748B' }}>runs per 6-ball over</span>
              </div>

              <div
                style={{
                  background: 'rgba(99,102,241,0.15)',
                  border: '1px solid rgba(99,102,241,0.3)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#A5B4FC', fontWeight: 700 }}>
                  Legal Deliveries
                </span>
                <div
                  style={{
                    fontSize: '26px',
                    fontWeight: 800,
                    color: '#818CF8',
                    marginTop: '4px',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  {bowlingResults.legalBalls}
                </div>
                <span style={{ fontSize: '11px', color: '#64748B' }}>({bowlingResults.oversDecimal} overs)</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
