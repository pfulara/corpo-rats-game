export interface statsType {
  level: number;
  energy: number;
  exp: { current: number; goal: number };
  brainHealth: number;
  pressure: number;
  stressResistance: number;
  logic: number;
  willpower: number;
  luck: number;
  pointsToSpend: number;
}

export interface employeeType {
  _id: string;
  avatar: any;
  username: string;
  team: {
    id: string;
    name: string;
  } | null;
  stats: statsType;
}

export interface messageType {
  _id: string;
  sender: { _id: string; username: string };
  recipient: string;
  title: string;
  message: string;
  priority: boolean;
  unread: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface taskType {
  _id: string;
  name: string;
  description: string;
  energy: number;
  reward: {
    exp: number;
    money: number;
  };
  encounters?: encounterType[];
}

export interface encounterType {
  _id: string;
  name: string;
  stats: {
    multipler: number | string;
    brainHealth: number | string;
    stressResistance: number | string;
    logic: number | string;
    luck: number | string;
  };
  avatar: {
    sex: string;
    faceColor: string;
    hairStyle:
      | 'thick'
      | 'mohawk'
      | 'womanLong'
      | 'womanShort'
      | 'normal';
    hairColor:
      | '#000'
      | '#77311D'
      | '#FC909F'
      | '#fef08a'
      | '#F48150';
    eyeStyle: 'circle' | 'oval' | 'smile';
    noseStyle: 'short' | 'round' | 'long';
    mouthStyle: 'laugh' | 'smile' | 'peace';
    glassesStyle: 'none' | 'round' | 'square';
    hatStyle: string;
    earSize: string;
    shirtStyle: string;
    shirtColor: string;
    bgColor: string;
  };
}

export interface userTaskType {
  isPending: boolean;
  endAt: Date;
  startAt: Date;
}

export interface runningTaskType {
  isPending: boolean;
  reward: {
    exp: number;
    money: number;
  };
  task: {
    id: string;
    name: string;
    description: string;
  };
  startAt: string;
  endAt: string;
}

export interface turnType {
  id: string;
  dmg: number | null;
  playerHealth: number;
  enemyHealth: number;
  move: string | null;
  critic: boolean;
}

export interface AdminUserType {
  _id: string;
  status: string;
  username: string;
  createdAt: string;
  email: string;
  admin: boolean;
}
