
export enum AttackType {
  DDOS = "DDoS",
  RECON = "Reconnaissance",
  WEB_INJECTION = "Web Injection",
  BRUTE_FORCE = "Brute Force",
  MALWARE = "Malware Injection",
  SPOOFING = "Spoofing",
  NORMAL = "Normal Traffic"
}

export interface NetworkLog {
  id: string;
  timestamp: string;
  sourceIp: string;
  destIp: string;
  protocol: string;
  length: number;
  attackType: AttackType;
  riskScore: number;
  info: string;
}

export interface SystemStats {
  cpuUsage: number;
  memUsage: number;
  networkLoad: number;
  activeAttacks: number;
}

export interface ForensicReport {
  summary: string;
  vectors: string[];
  remediation: string;
}
