import {
  languageSkillType,
  skillType,
} from '../../types/skillsSectionTypes';

export const fadeInDuration = 6000;

export const skills: Array<skillType> = [{
  title: null,
  content: [{
    name: 'Développement Frontend',
    value: 100,
    color: 'primary',
  }, {
    name: 'Développement Backend',
    value: 40,
    color: 'secondary',
  }],
}, {
  title: 'Frameworks',
  content: [{
    name: 'React',
    value: 100,
    color: 'primary',
  }, {
    name: 'AWS',
    value: 40,
    color: 'secondary',
  }, {
    name: 'Express',
    value: 20,
    color: 'secondary',
  }],
}];

export const languageSkills: languageSkillType = {
  title: 'Langages',
  content: [[{
    name: 'TypeScript',
    value: 100,
    color: 'primary',
  }, {
    name: 'Golang',
    value: 40,
    color: 'secondary',
  }], [{
    name: 'Java',
    value: 40,
    color: 'secondary',
  }, {
    name: 'Python',
    value: 40,
    color: 'secondary',
  }]],
};

export const linearProgressBufferValue: number = 0;

export const detailsContent = '*Relatives à mon expérience maximale avec React Typescript';
