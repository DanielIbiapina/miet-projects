// Mocked data - simula backend/banco de dados

export const mockUser = {
  id: "user_001",
  name: "Alex",
  email: "alex@example.com",
  createdAt: "2024-01-15T10:00:00Z",
  profile: {
    weight: 70, // kg
    height: 175, // cm
    biologicalSex: "male",
    age: 28,
  },
  preferences: {
    language: "en",
    units: "metric",
  },
  hasCompletedOnboarding: true,
};

export const mockStickerDevice = {
  id: "sticker_001",
  name: "Omni Feeling Sticker",
  model: "OS-2024",
  isAttached: true,
  lastScan: new Date().toISOString(),
  qrCode: "https://omni-feeling.app/activate/sticker_001",
  activatedAt: "2024-01-20T20:00:00Z",
};

export const mockTrustedContacts = [
  {
    id: "contact_001",
    name: "Sarah Johnson",
    phone: "+1 (555) 123-4567",
    relationship: "Friend",
    isPrimary: true,
    lastContacted: "2024-01-10T18:30:00Z",
  },
  {
    id: "contact_002",
    name: "Michael Chen",
    phone: "+1 (555) 234-5678",
    relationship: "Family",
    isPrimary: false,
    lastContacted: null,
  },
];

export const mockLocation = {
  lat: 40.7128,
  lng: -74.0060,
  address: "Downtown Bar District, New York, NY 10001",
  timestamp: new Date().toISOString(),
};

// BAC ranges conforme especificação: 0.0-0.2, 0.2-0.4, 0.4-0.6, 0.6-0.8, 0.8-1.0, 1.0-1.2, 1.2-1.4, 1.4-1.6, 1.6-1.8, 1.8-2.0
export const BAC_RANGES = [
  { min: 0.0, max: 0.2, label: "0.0 - 0.2", level: "Low" },
  { min: 0.2, max: 0.4, label: "0.2 - 0.4", level: "Low-Moderate" },
  { min: 0.4, max: 0.6, label: "0.4 - 0.6", level: "Moderate" },
  { min: 0.6, max: 0.8, label: "0.6 - 0.8", level: "Moderate-High" },
  { min: 0.8, max: 1.0, label: "0.8 - 1.0", level: "High" },
  { min: 1.0, max: 1.2, label: "1.0 - 1.2", level: "High" },
  { min: 1.2, max: 1.4, label: "1.2 - 1.4", level: "High" },
  { min: 1.4, max: 1.6, label: "1.4 - 1.6", level: "High" },
  { min: 1.6, max: 1.8, label: "1.6 - 1.8", level: "High" },
  { min: 1.8, max: 2.0, label: "1.8 - 2.0", level: "High" },
];

// Função para obter o range de BAC baseado no valor
export const getBACRange = (bac) => {
  return BAC_RANGES.find(range => bac >= range.min && bac < range.max) || BAC_RANGES[0];
};

// Histórico com múltiplas medições de uma noite (simulando 10-12 medições)
const generateTonightHistory = () => {
  const now = new Date();
  const startOfNight = new Date(now);
  startOfNight.setHours(20, 0, 0, 0); // 20:00
  
  const readings = [];
  let currentBAC = 0.0;
  const intervals = [15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 35, 40]; // minutos entre medições
  
  intervals.forEach((interval, index) => {
    const timestamp = new Date(startOfNight);
    timestamp.setMinutes(startOfNight.getMinutes() + intervals.slice(0, index + 1).reduce((a, b) => a + b, 0));
    
    // Simular aumento gradual de BAC com alguma variação
    if (index === 0) {
      currentBAC = 0.01 + Math.random() * 0.02;
    } else {
      // Aumento baseado no tempo e consumo simulado
      const increase = (interval / 60) * (0.02 + Math.random() * 0.03);
      currentBAC = Math.min(currentBAC + increase, 1.8);
      
      // Simular metabolismo (redução gradual)
      const metabolism = (interval / 60) * 0.015;
      currentBAC = Math.max(currentBAC - metabolism, 0);
    }
    
    const range = getBACRange(currentBAC);
    
    readings.push({
      id: `reading_${Date.now()}_${index}`,
      timestamp: timestamp.toISOString(),
      level: range.level,
      bac: parseFloat(currentBAC.toFixed(3)),
      location: {
        lat: 40.7128 + (Math.random() - 0.5) * 0.01,
        lng: -74.0060 + (Math.random() - 0.5) * 0.01,
        address: ["Downtown Bar", "Music Venue", "Restaurant", "Club", "Bar District"][Math.floor(Math.random() * 5)] + ", NYC",
      },
    });
  });
  
  return readings;
};

export const mockHistory = generateTonightHistory();

// Função para simular medição passiva (quando pessoa pega no celular)
export const simulatePassiveMeasurement = (userProfile = mockUser.profile, previousReadings = []) => {
  let currentBAC = 0.0;
  
  if (previousReadings.length > 0) {
    // Pegar última leitura
    const lastReading = previousReadings[previousReadings.length - 1];
    currentBAC = lastReading.bac;
    
    // Calcular tempo desde última medição
    const timeSinceLastReading = (new Date().getTime() - new Date(lastReading.timestamp).getTime()) / (1000 * 60); // minutos
    
    // Simular metabolismo (redução de ~0.015 BAC por hora)
    const metabolism = (timeSinceLastReading / 60) * 0.015;
    currentBAC = Math.max(currentBAC - metabolism, 0);
    
    // Simular possível consumo adicional (pequena chance)
    if (Math.random() < 0.3) {
      const consumption = (timeSinceLastReading / 60) * (0.01 + Math.random() * 0.02);
      currentBAC = Math.min(currentBAC + consumption, 1.8);
    }
  } else {
    // Primeira medição da noite
    currentBAC = 0.01 + Math.random() * 0.02;
  }
  
  const range = getBACRange(currentBAC);
  
  return {
    level: range.level,
    bac: parseFloat(currentBAC.toFixed(3)),
    timestamp: new Date().toISOString(),
    deviceId: mockStickerDevice.id,
    location: mockLocation,
  };
};

// Função para calcular projeção baseada em histórico
// Retorna quando estará sobrio e quando poderá dirigir
export const calculateProjection = (readings) => {
  if (readings.length === 0) return null;
  
  const lastReading = readings[readings.length - 1];
  const currentBAC = lastReading.bac;
  const currentTime = new Date(lastReading.timestamp);
  
  // Taxa de metabolismo: ~0.015 BAC por hora (assumindo que parou de beber)
  const metabolismRate = 0.015; // BAC por hora
  
  // Calcular quando estará completamente sobrio (BAC = 0)
  const hoursToSober = currentBAC / metabolismRate;
  const soberTime = new Date(currentTime.getTime() + (hoursToSober * 60 * 60 * 1000));
  
  // Calcular quando poderá dirigir (BAC <= 0.05 - limite legal em Portugal)
  const legalLimit = 0.05;
  let hoursToDrive = 0;
  let driveTime = null;
  
  if (currentBAC > legalLimit) {
    const bacToEliminate = currentBAC - legalLimit;
    hoursToDrive = bacToEliminate / metabolismRate;
    driveTime = new Date(currentTime.getTime() + (hoursToDrive * 60 * 60 * 1000));
  } else {
    // Já pode dirigir - usar tempo atual
    driveTime = new Date(currentTime);
  }
  
  // Calcular tendência baseada nas últimas medições
  let trend = "stable";
  if (readings.length >= 2) {
    const recent = readings.slice(-3);
    const firstBAC = recent[0].bac;
    const lastBAC = recent[recent.length - 1].bac;
    const diff = lastBAC - firstBAC;
    
    if (diff > 0.01) {
      trend = "increasing";
    } else if (diff < -0.01) {
      trend = "decreasing";
    }
  }
  
  return {
    currentBAC: parseFloat(currentBAC.toFixed(3)),
    soberTime: soberTime.toISOString(),
    driveTime: driveTime.toISOString(),
    hoursToSober: parseFloat(hoursToSober.toFixed(1)),
    hoursToDrive: hoursToDrive > 0 ? parseFloat(hoursToDrive.toFixed(1)) : 0,
    trend,
    canDriveNow: currentBAC <= legalLimit,
  };
};

// Função para obter recomendações baseadas no nível
export const getRecommendations = (level, bac) => {
  const baseRecommendations = {
    Low: [
      {
        id: "rec_low_1",
        iconType: "water",
        title: "Stay Hydrated",
        description: "Drink water between alcoholic beverages",
        priority: "low",
      },
      {
        id: "rec_low_2",
        iconType: "food",
        title: "Eat Food",
        description: "Have something to eat to slow absorption",
        priority: "low",
      },
      {
        id: "rec_low_3",
        iconType: "clock",
        title: "Pace Yourself",
        description: "Limit to one drink per hour",
        priority: "medium",
      },
    ],
    "Low-Moderate": [
      {
        id: "rec_lm_1",
        iconType: "water",
        title: "Drink Water",
        description: "Stay hydrated while drinking",
        priority: "medium",
      },
      {
        id: "rec_lm_2",
        iconType: "food",
        title: "Eat Regularly",
        description: "Have snacks to slow alcohol absorption",
        priority: "medium",
      },
    ],
    Moderate: [
      {
        id: "rec_mod_1",
        iconType: "stop",
        title: "Slow Down",
        description: "Reduce your drinking pace significantly",
        priority: "high",
      },
      {
        id: "rec_mod_2",
        iconType: "water",
        title: "Drink Water",
        description: "Consume at least one glass of water now",
        priority: "high",
      },
      {
        id: "rec_mod_3",
        iconType: "car",
        title: "Arrange Transportation",
        description: "Do not drive. Plan a safe ride home",
        priority: "critical",
      },
      {
        id: "rec_mod_4",
        iconType: "food",
        title: "Eat Substantially",
        description: "Have a meal to help slow alcohol absorption",
        priority: "medium",
      },
    ],
    "Moderate-High": [
      {
        id: "rec_mh_1",
        iconType: "stop",
        title: "Consider Stopping",
        description: "You may want to stop drinking for now",
        priority: "high",
      },
      {
        id: "rec_mh_2",
        iconType: "water",
        title: "Hydrate Immediately",
        description: "Drink water right now",
        priority: "critical",
      },
      {
        id: "rec_mh_3",
        iconType: "car",
        title: "Plan Safe Transport",
        description: "Arrange a ride home - do not drive",
        priority: "critical",
      },
    ],
    High: [
      {
        id: "rec_high_1",
        iconType: "stop",
        title: "Stop Drinking",
        description: "Stop consuming alcohol immediately",
        priority: "critical",
      },
      {
        id: "rec_high_2",
        iconType: "water",
        title: "Hydrate Immediately",
        description: "Drink water to help your body process alcohol",
        priority: "critical",
      },
      {
        id: "rec_high_3",
        iconType: "no",
        title: "Do Not Drive",
        description: "You are legally impaired. Arrange alternative transportation",
        priority: "critical",
      },
      {
        id: "rec_high_4",
        iconType: "people",
        title: "Stay with Friends",
        description: "Do not be alone. Stay with trusted companions",
        priority: "high",
      },
      {
        id: "rec_high_5",
        iconType: "phone",
        title: "Notify Trusted Contact",
        description: "Let someone know your location and status",
        priority: "high",
      },
    ],
  };

  return baseRecommendations[level] || baseRecommendations.Moderate;
};
