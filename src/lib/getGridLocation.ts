import { Localization as CoreLocalization } from '@mui/material/locale';
import { GridLocaleText } from '@/app/@types/gridLocaleApi';

export interface Localization {
  components: {
    MuiDataGrid: {
      defaultProps: {
        localeText: Partial<GridLocaleText>,
      },
    },
  };
}

export const getGridLocalization = (
  gridTranslations: Partial<GridLocaleText>,
  coreTranslations?: CoreLocalization,
): Localization => ({
  components: {
    MuiDataGrid: {
      defaultProps: {
        localeText: {
          ...gridTranslations,
          MuiTablePagination:
            coreTranslations?.components?.MuiTablePagination?.defaultProps ||
            {},
        },
      },
    },
  },
});
