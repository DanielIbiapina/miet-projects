// Mocked data - simula backend/banco de dados

export const mockUser = {
  id: "user_001",
  name: "Daniel",
  email: "daniel@example.com",
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
    name: "Laura Erasmus",
    phone: "+351 999 888 777",
    relationship: "Friend",
    isPrimary: true,
    lastContacted: "2024-01-10T18:30:00Z",
  },
  {
    id: "contact_002",
    name: "Francisco PhD",
    phone: "+351 999 555 444",
    relationship: "Family",
    isPrimary: false,
    lastContacted: null,
  },
];

export const mockLocation = {
  lat: 40.7128,
  lng: -74.006,
  address: "Rua do Comércio, Lisboa, Portugal",
  timestamp: new Date().toISOString(),
};

// BAC ranges realistas: 0.0% a 0.30% (mais que isso é fatal)
// Valores em porcentagem (0.05% = 0.05 BAC)
export const BAC_RANGES = [
  { min: 0.0, max: 0.05, label: "0.00 - 0.05%", level: "Low" },
  { min: 0.05, max: 0.08, label: "0.05 - 0.08%", level: "Low-Moderate" },
  { min: 0.08, max: 0.12, label: "0.08 - 0.12%", level: "Moderate" },
  { min: 0.12, max: 0.16, label: "0.12 - 0.16%", level: "Moderate-High" },
  { min: 0.16, max: 0.22, label: "0.16 - 0.22%", level: "High" },
  { min: 0.22, max: 0.3, label: "0.22 - 0.30%", level: "High" },
];

// Função para obter o range de BAC baseado no valor
export const getBACRange = (bac) => {
  return (
    BAC_RANGES.find((range) => bac >= range.min && bac < range.max) ||
    BAC_RANGES[0]
  );
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
    timestamp.setMinutes(
      startOfNight.getMinutes() +
        intervals.slice(0, index + 1).reduce((a, b) => a + b, 0)
    );

    // Definir faixas de valores baseado no índice da medição
    let minBAC = 0;
    let maxBAC = 0.06;

    if (index < 4) {
      // 1ª a 4ª medição: 0 a 0.060%
      minBAC = 0;
      maxBAC = 0.06;
    } else if (index < 8) {
      // 5ª a 8ª medição: 0.060 a 0.150%
      minBAC = 0.06;
      maxBAC = 0.15;
    } else if (index < 10) {
      // 9ª a 10ª medição: 0.150 a 0.220%
      minBAC = 0.15;
      maxBAC = 0.22;
    } else {
      // 11ª a 12ª medição: 0.130 a 0.180%
      minBAC = 0.13;
      maxBAC = 0.18;
    }

    // Simular aumento gradual de BAC dentro da faixa esperada
    if (index === 0) {
      // Primeira medição: valor aleatório dentro da faixa
      currentBAC = minBAC + Math.random() * (maxBAC - minBAC);
    } else {
      // Verificar se mudou de faixa
      let prevMinBAC = 0;
      let prevMaxBAC = 0.06;
      if (index - 1 < 4) {
        prevMinBAC = 0;
        prevMaxBAC = 0.06;
      } else if (index - 1 < 8) {
        prevMinBAC = 0.06;
        prevMaxBAC = 0.15;
      } else if (index - 1 < 10) {
        prevMinBAC = 0.15;
        prevMaxBAC = 0.22;
      } else {
        prevMinBAC = 0.13;
        prevMaxBAC = 0.18;
      }

      // Se mudou de faixa, começar com valor aleatório na nova faixa
      if (minBAC !== prevMinBAC || maxBAC !== prevMaxBAC) {
        currentBAC = minBAC + Math.random() * (maxBAC - minBAC);
      } else {
        // Mesma faixa: variação aleatória baseada no valor anterior
        const variation = (Math.random() - 0.5) * (maxBAC - minBAC) * 0.3; // Variação de até 30% da faixa
        currentBAC = currentBAC + variation;

        // Garantir que fica dentro da faixa
        currentBAC = Math.max(minBAC, Math.min(currentBAC, maxBAC));
      }
    }

    const range = getBACRange(currentBAC);

    readings.push({
      id: `reading_${Date.now()}_${index}`,
      timestamp: timestamp.toISOString(),
      level: range.level,
      bac: parseFloat(currentBAC.toFixed(3)),
      location: {
        lat: 40.7128 + (Math.random() - 0.5) * 0.01,
        lng: -74.006 + (Math.random() - 0.5) * 0.01,
        address:
          ["Downtown Bar", "Music Venue", "Restaurant", "Club", "Bar District"][
            Math.floor(Math.random() * 5)
          ] + ", NYC",
      },
    });
  });

  return readings;
};

export const mockHistory = generateTonightHistory();

// Função para simular medição passiva (quando pessoa pega no celular)
export const simulatePassiveMeasurement = (
  userProfile = mockUser.profile,
  previousReadings = []
) => {
  const measurementIndex = previousReadings.length; // 0-based index
  let currentBAC = 0.0;

  // Definir faixas de valores baseado no índice da medição
  let minBAC = 0;
  let maxBAC = 0.06;

  if (measurementIndex < 4) {
    // 1ª a 4ª medição: 0 a 0.060%
    minBAC = 0;
    maxBAC = 0.06;
  } else if (measurementIndex < 8) {
    // 5ª a 8ª medição: 0.060 a 0.150%
    minBAC = 0.06;
    maxBAC = 0.15;
  } else if (measurementIndex < 10) {
    // 9ª a 10ª medição: 0.150 a 0.220%
    minBAC = 0.15;
    maxBAC = 0.22;
  } else {
    // 11ª a 12ª medição: 0.130 a 0.180%
    minBAC = 0.13;
    maxBAC = 0.18;
  }

  if (previousReadings.length > 0) {
    // Pegar última leitura
    const lastReading = previousReadings[previousReadings.length - 1];
    currentBAC = lastReading.bac;

    // Verificar se mudou de faixa
    let prevMinBAC = 0;
    let prevMaxBAC = 0.06;
    const prevIndex = previousReadings.length - 1;
    if (prevIndex < 4) {
      prevMinBAC = 0;
      prevMaxBAC = 0.06;
    } else if (prevIndex < 8) {
      prevMinBAC = 0.06;
      prevMaxBAC = 0.15;
    } else if (prevIndex < 10) {
      prevMinBAC = 0.15;
      prevMaxBAC = 0.22;
    } else {
      prevMinBAC = 0.13;
      prevMaxBAC = 0.18;
    }

    // Se mudou de faixa, gerar valor aleatório na nova faixa
    if (minBAC !== prevMinBAC || maxBAC !== prevMaxBAC) {
      currentBAC = minBAC + Math.random() * (maxBAC - minBAC);
    } else {
      // Mesma faixa: variação aleatória dentro da faixa
      const rangeSize = maxBAC - minBAC;
      const variation = (Math.random() - 0.5) * rangeSize * 0.4; // Variação de até 40% da faixa
      currentBAC = currentBAC + variation;

      // Garantir que fica dentro da faixa
      currentBAC = Math.max(minBAC, Math.min(currentBAC, maxBAC));
    }
  } else {
    // Primeira medição da noite: valor aleatório dentro da faixa (0 a 0.060%)
    currentBAC = minBAC + Math.random() * (maxBAC - minBAC);
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

// Função para simular medição (alias para simulatePassiveMeasurement)
export function simulateMeasurement(userProfile, previousReadings) {
  return simulatePassiveMeasurement(userProfile, previousReadings);
}

// Função para calcular projeção baseada em histórico
// Retorna quando estará sobrio e quando poderá dirigir
export const calculateProjection = (readings) => {
  if (readings.length === 0) return null;

  const lastReading = readings[readings.length - 1];
  const currentBAC = lastReading.bac;
  // Usar tempo atual em vez do timestamp da leitura para projeções mais realistas
  const currentTime = new Date();

  // Taxa de metabolismo: ~0.015% por hora (assumindo que parou de beber)
  const metabolismRate = 0.015; // % por hora

  // Calcular quando estará completamente sobrio (BAC = 0)
  const hoursToSober = currentBAC / metabolismRate;
  const soberTime = new Date(
    currentTime.getTime() + hoursToSober * 60 * 60 * 1000
  );

  // Calcular quando poderá dirigir (BAC <= 0.05 - limite legal em Portugal)
  const legalLimit = 0.05;
  let hoursToDrive = 0;
  let driveTime = null;

  if (currentBAC > legalLimit) {
    const bacToEliminate = currentBAC - legalLimit;
    hoursToDrive = bacToEliminate / metabolismRate;
    driveTime = new Date(currentTime.getTime() + hoursToDrive * 60 * 60 * 1000);
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
        description:
          "You are legally impaired. Arrange alternative transportation",
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
