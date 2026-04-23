import React from 'react'
import Card from './components/Card'
const jobOpenings = [
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 85,
    location: "Mountain View, USA"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 75,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://storage.googleapis.com/pr-newsroom-wp/1/2021/02/Spotify_Icon_RGB_Green.png",
    companyName: "Spotify",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAsVBMVEX///8AAAD+mQD29vb+//1bW1v8/Pz5+fkXFxf+lgANDQ0QEBAgICAZGRlsbGwcHBzMzMy6urrw8PBFRUXb29vm5uYlJSU6OjqMjIxAQECzs7NKSkqpqakuLi7BwcGBgYH8jgB1dXWcnJz4woL34sRkZGRSUlL8+fD78uT87NL879z1uW74xov6q0b5oyn2nRf20Z7527P1pTf8+eD5u2j46sL0r1X3z4/3xHr8tWX9miJyO5BsAAAE2ElEQVR4nO2ZC3OqOhCAASkQHgIW0VoVVFpEq1XU2vb//7C7IeoBn9e5Qs7c2W/GzjQ88rm7CQkKAoIgCIIgCIIgCIIgCIIgCIL8n6h5Tt91XcdTeJsw1GZn0PM1XQR0y2+1nQZvJaHzJh7zMmzyNFI7/olSRrvGzalZP68EvPIKlqNfdBJF3+Pi5BlXnESxxyODzatKwBsHqcv1tMep3Klz00msVy71UhQIXMfpvh5ZVT29O/nOte6+tcc1f4Nc34Z7aPYKUt0rNyiB2uuFvtt5qUG1Ul7u8aKpuQP9vFTFk0IzVzztwoFWTuqpWinBGwZPPcugD5p+QeqFoxSj1nQ6xSHWeOYudcpfKVUYltyllFqt4fU7gfmXSCme2w3e8sOOt1TDrbcurIl5STnBBR9+Ut7pToa7VPe6Eg8p9WrmOEmdOunP9cHA5yk1LAq16v2GonCe0YurObG933vylFLe80q5jSeV0v2eb3CQKi7RcwsFKuWbvm9WLEX3KIVNX36VR9dTvmmZvl6plEq344WCyr+PoitP27R7VpWRUmA1oGTZy1adOtTOOw0e2+IpgteDJstkR56yC0rf/YESlYK53DQsQ4SPLQbQqNbo7kGtKQ7YaLqp65phUiklO79caPfQfyBCn5opWpqtiW0wUqkVDeJQtG0DpDTLNLT3BngC5Top0DWVqou2ZloQE03U9LaiQIgyKUV41sCUStm6rbeau8iWCxipTMowoXPLggTWVSYFf6HYbA0aqRScIrpwQfY9SpWi2VCplG4ahgaRsgEmleXpLas1iBTUuqnBFpleoDRKfl+sqDQZdHMOEYEhqOk6xENRBRWSSNt1C0alIUKzAR9PUOECVb153wdQXEm97B98p++snip8x3j0OG45NHze4MRJFIPqpISjrvXX+uD9/PahwndUt1edeyp8x3j1FXqBTnVSwrn6YfTzWxzNvX2rx9G4ECqtn3/BblT8s8P5BLaoxWFmqP4HGsc8dRqwqXv34rPsSUqW4XPU1jyuq+dDUWeDM8jm8eOrHioln+nAC2BRwDBf6k5uNTC0zKGwc4rHSRRFkzHc4tGGk2lyprXmuF2g4x7/RuvR4qLfJPqYSSQMCZmP4gcrycLkM1yPs27uIZmFICQRQiQpPPet/iMbEs4X9140mn5sl5C8RUqkcPLo9EGIlvCFZ9E9982duwolafxYJcYyBK3p6u4RRWspDqVZXMJQlIVoTsvj+57akOXJOoSsb0Ly8XAjRvIJBUuk0eqmyz4o0Q+MvY0gLEKyLElKiNdgBd18Lf/F+JaTrQSlJEGg5C8yL8sJrLYk0yKzjxvhWi1+IK4w6JZ0QvkNy8pelpMkpVY0XPNtND4u3ex/eRxt0xCGBZyVRrRlEc4ePXUWux1/h9JOi6Q/H9GqIBYny9HPHA6xM76YSxpGZT4F6Yy1WRMWLZpHmLE/Z+vv79Hoe/o1l+gMfjg427DYRTSHZUrRu8vL9NBzZkYJCSk2Sot4l89J9PiH8TmWP3mDE0iYLsqYLG8gR9Nfcl4MWrM5o5rwHITY+ipejlLyp4Sy0QbM14uJwNJcoVPOLk4W0/T3l1WV9DtP14vkZJ6oWir7G6/o2jJKkpizDoPNlfJRA4IgCIIgCIIgCIIgCIIgCILczz82jVC4j95BWgAAAABJRU5ErkJggg==",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 95,
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACUCAMAAABY3hBoAAAAh1BMVEWBvAYFpvD/ugjzUyXz8/P/+fP79//y9//z/v8AovD/twDz8/Hz+Pn49fPu8vP39frzgGaeyWVauPH9xlr8x2XzwbbzQADzSxTzhW2jy2R2uADO4LOeyVoAn/Cy2fL337PzoZDz0Mnzd1621YvY5cTzdFeXxk3A3/JNs/CFx/H60oX9w0325MHo/LGtAAABMElEQVR4nO3c647BUBiF4WJTdDtM6zCMM4MZ7v/6RHeNksyPZjWxJe97AV+eC1j5AuNpwasB/wWsaH+wSKukM/dTDmbXm77WZtW8HmpsP8Rmu14eNhyNtUZ9B5tMA63p1xOspjX+zGCiCxgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMBEmKczrfW3PGyzKWw7E9s/DNuMbaqlLhM15JzrDcaTvgWsaBmsU5dL70ShnM3DOodjrHX8SWXh7ynROp1tHraYt7TmsYMlbbXlE6yi1cpgg3ZVCxgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMBeCrvPtMqFHcRdWxzfhm0DseRh2GZMV87dKfklpocBK5q3sAu/90lQIc+kFQAAAABJRU5ErkJggg==",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Software Intern",
    tag1: "Part Time",
    tag2: "Entry Level",
    pay: 35,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAb1BMVEX/OFz/////NVr/LVX/MFf/KFL/JFD/+/z/IU7/+Pn/zNP/aID/HUz/6u3/2t//4ub/WnX/hZf/eo7/PWD/8PL/Y3z/DEX/UW7/09n/pLH/Q2T/SGj/sLv/usT/xc3/k6P/m6n/c4n/jJ3/ADX/AD5fo2oQAAAEcUlEQVR4nO1ZyZajMAwMsk3YCYEACUuWyf9/41hy2ELP3DB9UJ26oftRyKXSwuHAYDAYDAaDwWAwGAwGg8FgMBgMBoPB+C8A9mbwDenJPBee3JvHDLIMuyBJgrYqf024VJg6H9SV2JuNQXk/OiOK0NubD0I8iE2cJAX98PwFsZIXjFORVQCnO7G77a4rcGNNpPeEZgLeDcUVlHuTUhidGD5eIE4Yq3DnA4RGC+k4ychFgdU721V0RRJTwkEe7651uKHKq1lk3ExfSKP9KGkKGKhezS9J1Hq2Y6ig8h3HPy0kJDBUyY6uEHWaQPd1VopCpX7+j+0hTzpQzrdXqieahNgrVqrVj29XMRGJvvzaSVXQ6NTzq5UpibO+nu7kVREF6ofs9+rdVEWK8n+qviJEr9qlPVbdj4pCiEDfuu+gKmichaIAptCIMyWgfVLkUYOiQMlb0+RCfXhFlICubU6yKjBQhkR0eARJHCd9psxxCvSq1LpXzRQlD4+xRfczw0TuoSrI9UOPDSpKytqZwVQdUlVq+fwmRcGBOBVpkqQ01XQUn9K+qmBSFLV5Tn+BMsqfyTjOGFVZNdCp6pk271VKHBwkmXxMBwi15b4KxNhwKhR5P9QacLFvCenGC/sqiy0oBaSjSUr2Wk+X0UKpxbvSqb2R39naAcJNTwfHEyoKci2j9DAakrwUg9SJX21N6uo6Jhng+Dk7JMqA/hM4lP3ZVgsT4dLAdOZEKp2NWCckZeRNc2pgSVXufTabY5LNtgfy6U+tw4z81oADKvj5eRaWG/85CR0JP9SMfW9FVSTgYDAgOqPrmGOurnnHIRkpIfzQRqjKRapTox4P0aCSWIxbF5MRFlRlet1p20NF7jmoCA3sOuoeAE1Wbt/BqGA5FVA/kJjThIoMbDovQ3JzVcknzk/59PKQT8sDrx0N7HMTh4u42TpU1LPc5+8usMgV2AjLylkGSgu/xz/fuNaAh8/1Fq9Oym81T1GvBkGJq734vS0pla0HUBnqEz2eBXVW32dFjJttXcHrh9ZkBhelVES07/wejMnHNj4/rCrpt3BB4U6xTued1QAKY7fpwh8a/eR6lUwi9M3UsN6hk0sEFkitFeK+iNPxtGp/DalNj8/0dPnad/7QyNCu04ycqt/2ew36jn9ZkVImUs5lvUHLtvd0Wgc/vl+8vA8D8uobVolV6bKtJVAb4C9LLFAzYLLPOS+DotAn/I3N81Cia3dzSxdUefSM3mAKHh/lLCwSEhsV2WyEezGkmfSeaFJOACAqilV9iQbKLhXrdPtvbTR96ie/PSGE9646WiDU+B1LNMTPb2XpCimid0YsQwuzX9kan2xf2auNjcAf5oO2dDvze3LVNzvjqJmVeUa2zhLFqG5Q8+/JhpOldUJptisfxNdy9lxXtcXsZlDZG5Hz10CrfjVLawLv9PgcqtOfpcUdP4hSXLJ7dlLlerEJbgkh3oxK2wtikEqJf8XhvzcZDAaDwWAwGAwGg8FgMBgMBoPBYDAYvwl/AR/JMurdDZyDAAAAAElFTkSuQmCC",
    companyName: "Airbnb",
    datePosted: "6 days ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 70,
    location: "San Francisco, USA"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAdVBMVEVjW/////9cU/9hWf9QRv+fm/9aUf9fV/9dVf9YT/9US/9WTf9SSP+sqf9ORP/OzP/KyP/Y1v+wrf+jn/+alv+2s/+7uP9lXv/4+P/w8P9xav9+eP/l5P9qY/+Sjf/d3P+Hgv/q6f9IPf/S0f/Bvv+Mh/94cv/ipjDrAAADpUlEQVR4nO2ba3OqMBCGJatJuF8FuYOo//8nHmo7vWkoMM3SM7PPp35wpo+b8JJdcLcjCIIgCIIgCIIgCIIgiP8bkIxzxqSUjI1/cSZgYyFmeXWXuMeL7w+DH1zSKG66wvJMCduoAWPZ9VLlJ+Mrp7wP3TITpsRXsmUSfPf5rBZGV9tCXUrgWZSrjd68+rRAXEXJ3YkifaaysJx4Wc1TGtnjlAo8d7YSlhTIYIETjhR44RInHCnmL3JCkdqny5wwpHi30AlBCrL5WYAmZR+XOiFI7Rc76Zeyo78nBdD+PSmx+NJDkDJXrJ52KU+dB3k7DEMYVo9nLN1SZ5VS2BXAOJNQF+XV9XNEKVErnOLzW5sAAEKYjlfEQYUkJRX73H84XArTrK8BihRPnksl7MmHQTr8ECJIxc+lGkUrBSaUreHolTIVUodnlXrVEl4ntDopK9VaE8XQ3ZCq9pRxtDSXYwLV1WcYQ8a3GmoAqKSMU5rtNxq2nKdGB0OZbTDR2O2cQS01Uh3Ls41eL6ba6e/0x9uYTqhSUPQ/WY03ZzfzJKaXPa/p8zvgeFIgZ0mNeZp4ypj/dVR3mkf6hqElqpw/3RhqrHkZOD8OFT9wOVKx5G3mXPGFAMuKiQW16mukkBf1dLB/oc2QIgu8eH6xKhsrSM1ifrFSG0lqLFY5OxsavBhlspup1XtoUmM4eEXaz7E6mIhWY89ZJDOGQy3yGQuYV0c/LqPuNusRMbacx+mUj1DX7xUQlp1MlavC3OqfvLgoJ3bXNlIv5XIS5SIW2zWrdtkrpLTmp5y+55ulQirWeGQXXSMnv7Ol2O6uxsuPxYbfnJk6CrnikelR402ZHcZ/0DY7ZbupktIZVHepMXaizHteLvOi2FP6pe7lKrj5cJ3LTLHRdV59H1KGkQ9u4TlMvL8MAWAK1dHvpjGnPkvdxfyku9XCtG3L4nBTh+den9OD1F2sCocguARDq74p52dkqTnoTITVUledzd9KqUpr77dSKtLaZK2Umpr9byWlt1DrpNqd3l5mlVSpuUFeIxXrHuetkEq1j4mXS1087c3xYikX4enDQqm8wRgPy2bBENbwa5zBFAd37qws7JBe8Ly350XU/1ivU9tN92K/rSVs6+YGU5PYNrrt8R9HCs52tzio8tO3mp3y3j/UAmuk/x14eaUlK5tDlI5H4WHwL+nRTbracfhGb8d/mEnG2csvCdj9lwQM9eEjQRAEQRAEQRAEQRAEQWjhH3lZNDefuK0XAAAAAElFTkSuQmCC",
    companyName: "Stripe",
    datePosted: "2 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 88,
    location: "Dublin, Ireland"
  },
  {
    brandLogo: "https://m.media-amazon.com/images/I/41Nx6c+5DhL._AC_UF894,1000_QL80_.jpg",
    companyName: "Tesla",
    datePosted: "12 hours ago",
    post: "QA Tester",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxXBmcRtS61Evfczf2O2HrjrOUwMOGYluOPk2CQ8SfKGqqYsxMKBVG-U&s",
    companyName: "Adobe",
    datePosted: "3 weeks ago",
    post: "Technical Writer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Noida, India"
  }
];
console.log(jobOpenings);
const App = () => {
  return (
    <div className='parent'>
      {
        jobOpenings.map(function(elem,idx){
          return <div key={idx}>
            <Card logo={elem.brandLogo} company={elem.companyName} date={elem.datePosted} role= {elem.post} t1={elem.tag1} t2={elem.tag2} pay={elem.pay} loc={elem.location}/>
          </div>
        })
      }
    </div>
  )
}

export default App