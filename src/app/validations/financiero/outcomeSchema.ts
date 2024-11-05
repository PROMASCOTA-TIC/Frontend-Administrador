import { z } from 'zod';

export const outcomeSchema = z.object({
    descripcion: z
        .string()
        .min(1, { message: 'La descripción es requerida' }),
    categoria: z
        .string()
        .min(1, { message: 'Por favor, seleccione una categoría' }),
    fecha: z.date().refine(date => !isNaN(date.getTime()), {
        message: 'Por favor, ingrese una fecha válida',
    }),
    valor: z
        .number({
            required_error: 'El valor es requerido',
            invalid_type_error: 'Por favor, ingrese un número válido',
        })
        .positive({ message: 'Por favor, ingrese un valor positivo' }),
});
