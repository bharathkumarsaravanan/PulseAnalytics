export interface EventData {
  _id: string;
  type: "click" | "view";
  element: string;
  timestamp: string;
  page: string;
}

export interface EventStats {
  totalEvents: number;
  clicks: number;
  views: number;
  topElements: Record<string, number>;
}

export function analyzeEvents(events: EventData[] = []): EventStats {
  
  const total = events.length;
  const typeCounts: Record<string, number> = {};
  const elementCounts: Record<string, number> = {};
  
  events.forEach(event => {
    typeCounts[event.type] = (typeCounts[event.type] || 0) + 1;
    elementCounts[event.element] = (elementCounts[event.element] || 0) + 1;
  });
  
  const topElements = Object.entries(elementCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3)
    .reduce((acc: Record<string, number>, [el, count]) => {
      acc[el] = count;
      return acc;
    }, {});
  
  return {
    totalEvents: total,
    clicks: typeCounts.click || 0,
    views: typeCounts.view || 0,
    topElements
  };
}
