import { AuthEffects } from './../auth/store/auth.effects';
import { TeachersEffects } from '../teachers/store/teachers.effects';

export const AppEffects: [any] = [
  AuthEffects,
  TeachersEffects
];
