import { useMemo } from 'react';
import { MarkerType } from 'reactflow';

/**
 * Hook que calcula posições automáticas e gera as conexões (edges)
 * a partir do contrato declarativo de dados.
 */
export function useFlowLayout(data) {
  return useMemo(() => {
    if (!data || !Array.isArray(data.nodes)) {
      return { nodes: [], edges: [] };
    }

    const { nodes: rawNodes } = data;
    const edges = [];

    // Mapeamento posicional estático / escalonado por níveis para máxima legibilidade
    const coordinatesMap = {
      conv: { x: 340, y: 30 },
      resp1: { x: 80, y: 220 },
      dest: { x: 580, y: 220 },
      resp2: { x: 340, y: 400 },
      subs: { x: 740, y: 400 },
      copia: { x: 540, y: 580 },
      sem_guia: { x: 950, y: 580 },
    };

    const nodes = rawNodes.map((rawNode, index) => {
      const pos = coordinatesMap[rawNode.id] || {
        x: 100 + (index % 3) * 260,
        y: 50 + Math.floor(index / 3) * 180,
      };

      // Gerar edges a partir de targets de decisão
      if (rawNode.data?.yesTarget) {
        edges.push({
          id: `e-${rawNode.id}-${rawNode.data.yesTarget}`,
          source: rawNode.id,
          target: rawNode.data.yesTarget,
          sourceHandle: 'sim',
          label: 'SIM',
          animated: true,
          style: { stroke: '#059669', strokeWidth: 2 },
          labelStyle: { fill: '#047857', fontWeight: 800, fontSize: 11 },
          labelBgStyle: { fill: '#ecfdf5', fillOpacity: 0.95 },
          labelBgPadding: [6, 3],
          labelBgBorderRadius: 4,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#059669',
            width: 16,
            height: 16,
          },
        });
      }

      if (rawNode.data?.noTarget) {
        edges.push({
          id: `e-${rawNode.id}-${rawNode.data.noTarget}`,
          source: rawNode.id,
          target: rawNode.data.noTarget,
          sourceHandle: 'nao',
          label: 'NÃO',
          animated: false,
          style: { stroke: '#dc2626', strokeWidth: 2 },
          labelStyle: { fill: '#b91c1c', fontWeight: 800, fontSize: 11 },
          labelBgStyle: { fill: '#fef2f2', fillOpacity: 0.95 },
          labelBgPadding: [6, 3],
          labelBgBorderRadius: 4,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#dc2626',
            width: 16,
            height: 16,
          },
        });
      }

      return {
        id: rawNode.id,
        type: rawNode.type,
        data: rawNode.data,
        position: pos,
      };
    });

    return { nodes, edges };
  }, [data]);
}
