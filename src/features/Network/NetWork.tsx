import React, { useEffect, useRef, useState } from 'react';
import Graph from 'graphology';
import Sigma from 'sigma';

interface NodeInfo {
  id: string;
  label: string;
  color: string;
}

const NetWork = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedNode, setSelectedNode] = useState<NodeInfo | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // グラフ作成
    const graph = new Graph();
    graph.addNode("1", { label: "Node 1", x: 0, y: 0, size: 10, color: "blue" });
    graph.addNode("2", { label: "Node 2", x: 1, y: 1, size: 20, color: "red" });
    graph.addEdge("1", "2", { size: 5, color: "purple" });

    const renderer = new Sigma(graph, containerRef.current);

    // ノードクリック時のイベント
    renderer.on("clickNode", ({ node }) => {
      const attributes = graph.getNodeAttributes(node);
      setSelectedNode({
        id: node,
        label: attributes.label,
        color: attributes.color
      });
    });

    return () => renderer.kill();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={containerRef}
        style={{ width: '600px', height: '400px', border: '1px solid #ccc' }}
      />

      {/* ノードクリック後に表示するカード */}
      {selectedNode && (
        <div
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: 'white',
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h3 style={{ marginTop: 0 }}>ノード情報</h3>
          <p><strong>ID:</strong> {selectedNode.id}</p>
          <p><strong>ラベル:</strong> {selectedNode.label}</p>
          <p><strong>色:</strong> {selectedNode.color}</p>
        </div>
      )}
    </div>
  );
};

export default NetWork;
