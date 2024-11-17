'use client';

import React from 'react';

interface GrowingTreeProps {
  score: number;
}

export const GrowingTree = ({ score }: GrowingTreeProps) => {
  const normalizedScore = Math.max(0, Math.min(score, 100));

  // Calculate dimensions based on the score
  const trunkWidth = 20;
  const minTrunkHeight = 50;
  const maxTrunkHeight = 200;
  const trunkHeight =
    minTrunkHeight +
    ((maxTrunkHeight - minTrunkHeight) * normalizedScore) / 100;

  const minCanopyWidth = 60;
  const maxCanopyWidth = 180;
  const canopyWidth =
    minCanopyWidth +
    ((maxCanopyWidth - minCanopyWidth) * normalizedScore) / 100;

  const minCanopyHeight = 40;
  const maxCanopyHeight = 150;
  const canopyHeight =
    minCanopyHeight +
    ((maxCanopyHeight - minCanopyHeight) * normalizedScore) / 100;

  const svgHeight = maxTrunkHeight + maxCanopyHeight + 20; // Extra space
  const svgWidth = 200;

  return (
    <div className="flex items-end justify-center h-full">
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tree trunk with natural shape */}
        <path
          d={`
            M${svgWidth / 2 - trunkWidth / 2},${svgHeight}
            C${svgWidth / 2 - trunkWidth},${svgHeight - trunkHeight / 2}
             ${svgWidth / 2 - trunkWidth / 2},${svgHeight - trunkHeight}
             ${svgWidth / 2},${svgHeight - trunkHeight}
            C${svgWidth / 2 + trunkWidth / 2},${svgHeight - trunkHeight}
             ${svgWidth / 2 + trunkWidth},${svgHeight - trunkHeight / 2}
             ${svgWidth / 2 + trunkWidth / 2},${svgHeight}
            Z
          `}
          fill="#8B4513"
          className="tree-trunk"
        />

        {/* Tree canopy with cohesive shape */}
        <path
          d={`
            M${svgWidth / 2},${svgHeight - trunkHeight}
            C${svgWidth / 2 - canopyWidth / 2},${svgHeight - trunkHeight - canopyHeight / 3}
             ${svgWidth / 2 - canopyWidth / 2},${svgHeight - trunkHeight - (2 * canopyHeight) / 3}
             ${svgWidth / 2},${svgHeight - trunkHeight - canopyHeight}
            C${svgWidth / 2 + canopyWidth / 2},${svgHeight - trunkHeight - (2 * canopyHeight) / 3}
             ${svgWidth / 2 + canopyWidth / 2},${svgHeight - trunkHeight - canopyHeight / 3}
             ${svgWidth / 2},${svgHeight - trunkHeight}
            Z
          `}
          fill="#4CAF50"
          className="tree-canopy"
        />
      </svg>

      {/* Inline CSS for animation */}
      <style jsx>{`
        .tree-trunk,
        .tree-canopy {
          transition: all 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};
