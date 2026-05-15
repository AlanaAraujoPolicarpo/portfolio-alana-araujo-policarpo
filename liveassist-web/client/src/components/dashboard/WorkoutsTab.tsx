import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dumbbell, TrendingUp, TrendingDown } from 'lucide-react';

const WORKOUTS_GAIN = [
  {
    id: 1,
    name: 'Treino de Força - Peito',
    exercises: 5,
    duration: 60,
    difficulty: 'Intermediário',
    icon: '💪',
  },
  {
    id: 2,
    name: 'Treino de Força - Costas',
    exercises: 6,
    duration: 70,
    difficulty: 'Avançado',
    icon: '🏋️',
  },
  {
    id: 3,
    name: 'Treino de Força - Pernas',
    exercises: 7,
    duration: 75,
    difficulty: 'Avançado',
    icon: '🦵',
  },
];

const WORKOUTS_LOSS = [
  {
    id: 4,
    name: 'HIIT - 30 minutos',
    exercises: 8,
    duration: 30,
    difficulty: 'Intermediário',
    icon: '🔥',
  },
  {
    id: 5,
    name: 'Cardio - Corrida',
    exercises: 1,
    duration: 45,
    difficulty: 'Fácil',
    icon: '🏃',
  },
  {
    id: 6,
    name: 'Circuito Funcional',
    exercises: 10,
    duration: 40,
    difficulty: 'Intermediário',
    icon: '⚡',
  },
];

export default function WorkoutsTab() {
  const [selectedWorkout, setSelectedWorkout] = useState<any>(null);
  const [savedWorkouts, setSavedWorkouts] = useState<number[]>([]);

  const toggleSave = (id: number) => {
    setSavedWorkouts(prev =>
      prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id]
    );
  };

  const WorkoutCard = ({ workout }: { workout: any }) => (
    <Card
      className="p-4 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => setSelectedWorkout(workout)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-4xl">{workout.icon}</div>
        <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
          {workout.difficulty}
        </span>
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{workout.name}</h3>
      <div className="flex gap-3 text-sm text-gray-600 mb-3">
        <span>📋 {workout.exercises} exercícios</span>
        <span>⏱️ {workout.duration}min</span>
      </div>
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={(e) => {
          e.stopPropagation();
          toggleSave(workout.id);
        }}
      >
        {savedWorkouts.includes(workout.id) ? '⭐ Salvo' : '☆ Salvar'}
      </Button>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <Dumbbell className="h-8 w-8 text-red-500" />
          Treinos Personalizados
        </h2>
        <p className="text-gray-600">
          Escolha seu objetivo e comece a treinar agora
        </p>
      </div>

      <Tabs defaultValue="gain" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="gain" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            Ganho de Peso
          </TabsTrigger>
          <TabsTrigger value="loss" className="gap-2">
            <TrendingDown className="h-4 w-4" />
            Emagrecimento
          </TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Workouts List */}
          <div className="lg:col-span-2">
            <TabsContent value="gain">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {WORKOUTS_GAIN.map(workout => (
                  <WorkoutCard key={workout.id} workout={workout} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="loss">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {WORKOUTS_LOSS.map(workout => (
                  <WorkoutCard key={workout.id} workout={workout} />
                ))}
              </div>
            </TabsContent>
          </div>

          {/* Workout Details */}
          <div>
            {selectedWorkout ? (
              <Card className="sticky top-20 p-6">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">{selectedWorkout.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedWorkout.name}</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Exercícios</div>
                    <div className="text-2xl font-bold text-blue-600">{selectedWorkout.exercises}</div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Duração</div>
                    <div className="text-2xl font-bold text-green-600">{selectedWorkout.duration} min</div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Dificuldade</div>
                    <div className="text-lg font-bold text-purple-600">{selectedWorkout.difficulty}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full">▶️ Iniciar Treino</Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => toggleSave(selectedWorkout.id)}
                  >
                    {savedWorkouts.includes(selectedWorkout.id) ? '⭐ Remover' : '☆ Salvar'}
                  </Button>
                  <Button variant="outline" className="w-full">
                    👨‍⚕️ Consultar Trainer
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="sticky top-20 p-6 text-center text-gray-500">
                <p>Selecione um treino para ver detalhes</p>
              </Card>
            )}
          </div>
        </div>
      </Tabs>
    </div>
  );
}
