import { useEffect, useState, type FC } from 'react';
import { MultiDirectedGraph } from 'graphology';
import { SigmaContainer, useLoadGraph, useRegisterEvents } from '@react-sigma/core';
import { Paper, Grid, Box } from '@mui/material';
import '@react-sigma/core/lib/style.css';
import NodeInfoCard from './NodeInfoCard';

interface NodeInfo {
  id: string;
  label: string;
  color: string;
}

const GraphLoader: FC<{ onNodeClick: (node: NodeInfo) => void }> = ({ onNodeClick }) => {
  const loadGraph = useLoadGraph();
  const registerEvents = useRegisterEvents();

  useEffect(() => {
    const graph = new MultiDirectedGraph();
    graph.addNode("1", { label: "Node 1", x: 0, y: 0, size: 10, color: "blue" });
    graph.addNode("2", { label: "Node 2", x: 1, y: 1, size: 20, color: "red" });
    graph.addEdge("1", "2", { size: 5, color: "purple" });

    loadGraph(graph);

    registerEvents({
      clickNode: ({ node }) => {
        const attr = graph.getNodeAttributes(node);
        onNodeClick({
          id: node,
          label: attr.label,
          color: attr.color,
        });
      },
    });
  }, [loadGraph, registerEvents]);

  return null;
};

const NetWork: FC = () => {
  const [selectedNode, setSelectedNode] = useState<NodeInfo | null>(null);

  return (
    <Box p={1}>
      <Grid container spacing={3}>
        {/* グラフ表示 */}
        <Grid>
          <Paper elevation={4} sx={{ width: 600, height: 400, borderRadius: 3, overflow: 'hidden' }}>
            <SigmaContainer graph={MultiDirectedGraph} style={{ width: '100%', height: '100%' }}>
              <GraphLoader onNodeClick={setSelectedNode} />
            </SigmaContainer>
          </Paper>
        </Grid>

        {/* ノード情報カード */}
        {selectedNode && (
          <Grid>
            <NodeInfoCard node={selectedNode} onClose={() => setSelectedNode(null)} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default NetWork;
