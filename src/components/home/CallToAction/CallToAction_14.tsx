import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';

export interface IBenefitsItem {
  text: string
  icon: string
}

export interface IICallToActionPropsBackgroundcolor {
  colorA: string
  colorB: string
}

export interface ICallToActionProps {
  title: string
  description: string
  imageUrl: string
  benefits: IBenefitsItem[]
  backgroundColor: IICallToActionPropsBackgroundcolor
  jobPostingsLinkTextAttr: string
  jobPostingsLinkTextAttrLink: string
  jobPostingsLinkIcon: string
}

const CallToAction: React.FC<ICallToActionProps> = ({
  title = 'Explore Career Opportunities',
  description = 'Join our creative team to work on groundbreaking projects. Enjoy benefits like flexible schedules, remote work options, and a supportive community.',
  imageUrl = 'https://images.unsplash.com/photo-1670850664664-d8ed42d767fa?fm=jpg&q=60&w=1200&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  benefits = [
    {
      text: 'Creative freedom and project ownership',
      icon: 'fa-solid fa-check-circle',
    },
    {
      text: 'Inclusive and supportive team culture',
      icon: 'fa-solid fa-check-circle',
    },
    {
      text: 'Opportunities for professional growth',
      icon: 'fa-solid fa-check-circle',
    },
    {
      text: 'Work-life balance prioritized',
      icon: 'fa-solid fa-check-circle',
    },
  ],
  backgroundColor = {
    colorA: '#80caff',
    colorB: '#4f46e5',
  },
  jobPostingsLinkTextAttr = 'See our job postings',
  jobPostingsLinkTextAttrLink = '/',
  jobPostingsLinkIcon = 'fa-solid fa-arrow-right',
}) =>{
  return (
    <div className="bg-gray-900 py-16 sm:py-20">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto overflow-hidden flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <EditableImg
              propKey="imageUrl"
              className="IMAGE h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src={imageUrl}
              alt={imageUrl}
            />
            <div className="w-full flex-auto">
              <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <EditableText propKey="title">{title}</EditableText>
              </h2>
              <p className="DESC mt-6 text-lg leading-8 text-gray-300">
                <EditableText propKey="description">{description}</EditableText>
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
              >
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-x-3">
                    <EditableIcon propKey={`benefits_${index}_icon`} icon={benefit.icon} iconLibrary="FontAwesome" className="text-lg text-white/80" />
                    <EditableText propKey={`benefits_${index}_text`}>{benefit.text}</EditableText>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <EditableButton className="TEXT-LINK text-sm group flex items-center gap-1 font-semibold leading-6 text-sky-400" href={jobPostingsLinkTextAttrLink}>
                  <EditableText propKey="jobPostingsLinkTextAttr">{jobPostingsLinkTextAttr}</EditableText>
                  <EditableIcon propKey="jobPostingsLinkIcon" icon={jobPostingsLinkIcon} className="group-hover:translate-x-1 transition-all duration-300" />
                </EditableButton>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className={`aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[${backgroundColor.colorA}] to-[${backgroundColor.colorB}] opacity-25`}
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}


export default CallToAction;