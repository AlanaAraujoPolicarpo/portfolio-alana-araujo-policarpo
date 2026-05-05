import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Star, MapPin, Clock, Video } from 'lucide-react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';

const NUTRITIONISTS = [
  {
    id: 1,
    name: 'Dra. Ana Silva',
    specialty: 'Nutrição Esportiva',
    rating: 4.9,
    reviews: 128,
    price: 'R$ 150/h',
    availability: 'Seg-Sex 9h-18h',
    image: '👩‍⚕️',
  },
  {
    id: 2,
    name: 'Dr. Carlos Santos',
    specialty: 'Nutrição Clínica',
    rating: 4.8,
    reviews: 95,
    price: 'R$ 180/h',
    availability: 'Ter-Sab 10h-20h',
    image: '👨‍⚕️',
  },
  {
    id: 3,
    name: 'Dra. Marina Costa',
    specialty: 'Nutrição Funcional',
    rating: 5.0,
    reviews: 156,
    price: 'R$ 200/h',
    availability: 'Seg-Sex 14h-22h',
    image: '👩‍⚕️',
  },
];

const TRAINERS = [
  {
    id: 4,
    name: 'Personal Trainer João',
    specialty: 'Musculação',
    rating: 4.9,
    reviews: 203,
    price: 'R$ 120/h',
    availability: 'Seg-Sab 6h-22h',
    image: '💪',
  },
  {
    id: 5,
    name: 'Personal Trainer Maria',
    specialty: 'Funcional & HIIT',
    rating: 4.7,
    reviews: 87,
    price: 'R$ 100/h',
    availability: 'Ter-Dom 7h-19h',
    image: '🏃‍♀️',
  },
];

export default function ProfessionalsTab() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const [selectedProfessional, setSelectedProfessional] = useState<any>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleStartCall = (professional: any) => {
    if (!user) return;
    const params = new URLSearchParams({
      professionalId: professional.id.toString(),
      professionalName: professional.name,
      specialty: professional.specialty,
    });
    setLocation(`/video-call?${params.toString()}`);
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const ProfessionalCard = ({ professional }: { professional: any }) => (
    <Card
      className="p-4 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => setSelectedProfessional(professional)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-4xl">{professional.image}</div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(professional.id);
          }}
          className="text-xl"
        >
          {favorites.includes(professional.id) ? '❤️' : '🤍'}
        </button>
      </div>
      <h3 className="font-bold text-gray-900 mb-1">{professional.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{professional.specialty}</p>
      
      <div className="flex items-center gap-1 mb-3">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < Math.floor(professional.rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-gray-600">
          {professional.rating} ({professional.reviews} avaliações)
        </span>
      </div>

      <div className="space-y-1 text-xs text-gray-600 mb-3">
        <div className="flex items-center gap-1">
          <span>💰</span> {professional.price}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" /> {professional.availability}
        </div>
      </div>

      <Button size="sm" className="w-full">
        Agendar Consulta
      </Button>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <Users className="h-8 w-8 text-blue-500" />
          Profissionais de Saúde
        </h2>
        <p className="text-gray-600">
          Conecte-se com nutricionistas e personal trainers certificados
        </p>
      </div>

      <Tabs defaultValue="nutritionists" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="nutritionists">👩‍⚕️ Nutricionistas</TabsTrigger>
          <TabsTrigger value="trainers">💪 Personal Trainers</TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Professionals List */}
          <div className="lg:col-span-2">
            <TabsContent value="nutritionists">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {NUTRITIONISTS.map(professional => (
                  <ProfessionalCard
                    key={professional.id}
                    professional={professional}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="trainers">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TRAINERS.map(professional => (
                  <ProfessionalCard
                    key={professional.id}
                    professional={professional}
                  />
                ))}
              </div>
            </TabsContent>
          </div>

          {/* Professional Details */}
          <div>
            {selectedProfessional ? (
              <Card className="sticky top-20 p-6">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">{selectedProfessional.image}</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedProfessional.name}
                  </h3>
                  <p className="text-sm text-gray-600">{selectedProfessional.specialty}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Avaliação</div>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold text-yellow-600">
                        {selectedProfessional.rating}
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(selectedProfessional.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {selectedProfessional.reviews} avaliações
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Preço</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {selectedProfessional.price}
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Disponibilidade</div>
                    <div className="text-sm font-semibold text-green-600">
                      {selectedProfessional.availability}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full gap-2"
                    onClick={() => handleStartCall(selectedProfessional)}
                  >
                    <Video className="h-4 w-4" />
                    Iniciar Chamada
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => toggleFavorite(selectedProfessional.id)}
                  >
                    {favorites.includes(selectedProfessional.id)
                      ? '❤️ Remover Favorito'
                      : '🤍 Adicionar Favorito'}
                  </Button>
                  <Button variant="outline" className="w-full">
                    💬 Enviar Mensagem
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="sticky top-20 p-6 text-center text-gray-500">
                <p>Selecione um profissional para ver detalhes</p>
              </Card>
            )}
          </div>
        </div>
      </Tabs>
    </div>
  );
}
