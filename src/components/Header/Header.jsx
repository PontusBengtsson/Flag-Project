import React from 'react';
import { Box, Button, useTheme } from '@mui/material';

const Header = () => {
	const theme = useTheme(); // Access the theme object

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'row',
				width: '100%',
				
				backgroundColor: 'background.default',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					fontSize: '20px',
					fontWeight: '800',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '60%',
					padding: '15px 0px 15px 0px'
				}}
			>
				<Box sx={{ fontWeight: theme.typography.fontWeightBold }}>The Flag App</Box>
				<img
					src="/assets/techover-logo-dark.png"
					style={{ maxHeight: '100%', maxWidth: '100%' }}
					alt="Techover"
				/>
				<Button sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '0px' }}>
					<svg xmlns="http://www.w3.org/2000/svg" width="29.548" height="30.563" viewBox="0 0 29.548 30.563">
						<g
							id="Subtraction_2"
							data-name="Subtraction 2"
							transform="matrix(0.978, -0.208, 0.208, 0.978, 0, 5.132)"
							fill="#000"
						>
							<path
								d="M 13.1487283706665 25.5 C 11.44019794464111 25.5 9.783098220825195 25.16930961608887 8.223467826843262 24.51712989807129 C 6.717148303985596 23.88723945617676 5.3643479347229 22.9854793548584 4.202638149261475 21.83690071105957 C 3.041308164596558 20.688720703125 2.129648208618164 19.35190963745117 1.492968201637268 17.86362075805664 C 0.8340781331062317 16.32341003417969 0.499998152256012 14.68706035614014 0.499998152256012 13 C 0.499998152256012 11.31293964385986 0.8340781331062317 9.676589965820312 1.492968201637268 8.13638973236084 C 2.129648208618164 6.648079872131348 3.04131817817688 5.311270236968994 4.202638149261475 4.163099765777588 C 5.3643479347229 3.014519929885864 6.717148303985596 2.112760066986084 8.223467826843262 1.482869982719421 C 9.783098220825195 0.8306900262832642 11.44019794464111 0.5 13.1487283706665 0.5 C 13.36637401580811 0.5 13.58392715454102 0.5054885149002075 13.80100536346436 0.5164262652397156 C 9.882394790649414 2.296556949615479 7.291938304901123 6.185417652130127 7.291938304901123 10.59239959716797 C 7.291938304901123 16.70900917053223 12.32233810424805 21.68523025512695 18.50552749633789 21.68523025512695 C 20.10935211181641 21.68523025512695 21.66780662536621 21.35343933105469 23.10197257995605 20.71462440490723 C 22.1580696105957 21.90229415893555 21.00032234191895 22.91800880432129 19.68442726135254 23.70439910888672 C 17.71874809265137 24.87908935546875 15.45873832702637 25.5 13.1487283706665 25.5 Z"
								stroke="none"
							/>
							<path
								d="M 13.1487283706665 25 C 15.36844825744629 25 17.53975868225098 24.4035701751709 19.42792892456055 23.27519989013672 C 20.12330627441406 22.85963439941406 20.77275657653809 22.37736701965332 21.36722946166992 21.83769989013672 C 20.4401912689209 22.06769943237305 19.48091888427734 22.18523025512695 18.50552749633789 22.18523025512695 C 12.04662799835205 22.18523025512695 6.791938304901123 16.98471069335938 6.791938304901123 10.59239959716797 C 6.791938304901123 6.6956787109375 8.728936195373535 3.186800718307495 11.80455207824707 1.07207715511322 C 10.63706207275391 1.198371529579163 9.501975059509277 1.490195035934448 8.41635799407959 1.944169998168945 C 6.969498157501221 2.549190044403076 5.670068264007568 3.415380001068115 4.554168224334717 4.518660068511963 C 3.439068078994751 5.621140003204346 2.563798189163208 6.904489994049072 1.952668190002441 8.333049774169922 C 1.320528149604797 9.81074047088623 0.999998152256012 11.38092994689941 0.999998152256012 13 C 0.999998152256012 14.61907005310059 1.320528149604797 16.18926048278809 1.952678203582764 17.66695976257324 C 2.563788175582886 19.09551048278809 3.439058065414429 20.37885093688965 4.554178237915039 21.48134994506836 C 5.670068264007568 22.58461952209473 6.969498157501221 23.45080947875977 8.41635799407959 24.05583953857422 C 9.914567947387695 24.68234062194824 11.50676822662354 25 13.1487283706665 25 M 13.1487283706665 26 C 11.37361812591553 26 9.651618003845215 25.65629005432129 8.03056812286377 24.97842025756836 C 6.464818000793457 24.32368087768555 5.058638095855713 23.38635063171387 3.85109806060791 22.19245910644531 C 2.643548250198364 20.99858093261719 1.695498108863831 19.60831069946289 1.033268213272095 18.06027030944824 C 0.3476381599903107 16.45755958557129 -1.839294441197126e-06 14.75504016876221 -1.839294441197126e-06 13 C -1.839294441197126e-06 11.24495983123779 0.3476381599903107 9.542440414428711 1.033268213272095 7.939730167388916 C 1.695498108863831 6.39169979095459 2.643548250198364 5.001420021057129 3.85109806060791 3.807539939880371 C 5.058638095855713 2.61365008354187 6.464818000793457 1.67631995677948 8.03056812286377 1.02157998085022 C 9.651618003845215 0.3437100052833557 11.37361812591553 -1.77635683940025e-15 13.1487283706665 -1.77635683940025e-15 C 14.09868812561035 -1.77635683940025e-15 15.04675769805908 0.1006700024008751 15.96660804748535 0.2992199957370758 C 11.15348815917969 1.455579996109009 7.791938304901123 5.687900066375732 7.791938304901123 10.59239959716797 C 7.791938304901123 16.43330955505371 12.5980281829834 21.18523025512695 18.50552749633789 21.18523025512695 C 20.73312759399414 21.18523025512695 22.86866760253906 20.51589012145996 24.68127822875977 19.24954986572266 C 23.56504821777344 21.25888061523438 21.92560768127441 22.94753074645996 19.94091796875 24.13360023498535 C 17.89772796630859 25.35461044311523 15.54902839660645 26 13.1487283706665 26 Z"
								stroke="none"
								fill="#111517"
							/>
						</g>
					</svg>
					<Box>Light mode</Box>
				</Button>
			</Box>
		</Box>
	);
};

export default Header;
