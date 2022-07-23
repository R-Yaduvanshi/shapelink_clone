import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

const TermsCondition = () => {
  return (
    <>
      <Stack padding="90px 150px 30px 80px" backgroundColor="#e8eaf6">
        <Text
          fontSize="26px"
          color="#555"
          fontWeight="normal"
          textAlign="left"
          align="left"
        >
          Service and terms agreement
        </Text>
        <Text fontSize="13px">
          All information presented by Twiik is provided for personal workout
          analysis purposes only and is not intended to replace or substitute
          for the expert medical opinion of your doctor, physical trainer,
          coach, or health professional. Always consult a doctor or health
          professional before starting any workout program. This site is
          designed to help you take account of your own daily fitness and diet
          practices. Twiik reserves the right to cancel or refuse membership for
          any reason at the point of registration, or any time in the future.
        </Text>
        <Text
          letterSpacing="0px"
          fontWeight="bold"
          fontFamilly="lato"
          fontSize="12px"
        >
          General terms and conditions
        </Text>
        <Text fontSize="13px">
          You agree to (a) be honest with yourself; (b) keep your own login and
          password information secure and private. (c) Do your best to follow
          through on your goals!
        </Text>
        <Text
          letterSpacing="0px"
          fontWeight="bold"
          fontFamilly="lato"
          fontSize="12px"
        >
          Free membership
        </Text>
        <Text fontSize="13px">
          If you sign up for a free Twiik account, you are not obligated in any
          way to pay for your membership. You will be given the option to become
          a paying member during the login process. You can become a paying
          member at any time. The free membership has no time limit.
        </Text>
        <Text
          letterSpacing="0px"
          fontWeight="bold"
          fontFamilly="lato"
          fontSize="12px"
        >
          Membership
        </Text>
        <Text fontSize="13px">
          Basic subscription service offered by Twiik runs from registration and
          on with no time limit. You are not obligated to pay for additional
          services for any reason unless you decide to renew your existing
          paying membership. There are no auto-renewals options, and we don't
          keep record of your credit card information on our systems. The site
          will remind you when your paying membership is about to expire and
          walk you through the steps required to renew your services with Twiik.
        </Text>
        <Text
          letterSpacing="0px"
          fontWeight="bold"
          fontFamilly="lato"
          fontSize="12px"
        >
          Cancelation
        </Text>
        <Text fontSize="13px">
          You may cancel your membership at anytime. If you are a paying member
          you will not get a refund. If you wish to cancel your service, you may
          do so by one of the following methods:
        </Text>
        <Text fontSize="13px">
          You may email info@Twiik. please include your contact information and
          login name. Please allow up to 7 days for your cancellation to be
          processed.
        </Text>
        <Text
          letterSpacing="0px"
          fontWeight="bold"
          fontFamilly="lato"
          fontSize="12px"
        >
          Registered information
        </Text>
        <Text fontSize="13px">
          Twiik AB has the right to use a members contact information for
          sending information and offers from Wellness Tech Labs International
          AB and its partners.
        </Text>
        <Text
          letterSpacing="0px"
          fontWeight="bold"
          fontFamilly="lato"
          fontSize="12px"
        >
          Abuse and spamming
        </Text>
        <Text fontSize="13px">
          Twiik has a very strict spamming and abuse policy. Spamming our
          discussion board, unsolicited advertising of products or services via
          any site communcation methods including site messaging, discussions,
          friends lists, or email will result in immediate termination of your
          account. If you are not sure if a message falls within the category of
          spam, please ask us first. Abuse of other Twiik members by way of
          messaging, discussion board posts, friends lists, or other methods
          will not be tolerated and will lead to immediate account cancellation
          without refund and ban you from using our services in the future.
        </Text>
        <Text
          letterSpacing="0px"
          fontWeight="bold"
          fontFamilly="lato"
          fontSize="12px"
        >
          waiwer, releae and limitation of liability
        </Text>
        <Text fontSize="13px">
          You agree that neither Twiik, nor its affiliates, employees,
          consultants or information providers shall have any liability to you
          under any theory of liability or indemnity in connection with the use
          of our online fitness journal, workout programs, or hard copy printed
          equivalent. You hereby release and forever waive any and all claims
          you may have against Twiik, its affiliates, employees, consultants or
          information providers. Twiik shall not hold any liability for loss of
          journal data due to hardware failure, software failure, terminating of
          site, user error, or acts of god. By continuing with registration you
          agree to the terms and conditions listed here.
        </Text>
        <Text fontSize="13px">
          The total liability of Twiik, its affiliates, employees, consultants
          or information providers, if any, for losses or damages including
          journal data storage shall not exceed the fees paid by you for your
          most current Twiik subscription. All other damages, direct or
          indirect, special, incidental, consequential or punitive arising from
          any use of the information or other parts of Twiik are hereby excluded
          even if Twiik, its employees, agents, consultants, or information
          providers have been advised of the possibility of such damages. Void
          where prohibited by law.
        </Text>
        <Text fontSize="13px">
          You may contact us for any reason using the following information:
        </Text>
        <Text fontSize="13px">Twiik AB</Text>
        <Text fontSize="13px">Orgnr: 556947-7788</Text>
        <Text fontSize="13px">
          Address: Djäknegatan 9, 211 35 Malmö, Sverige
        </Text>
        <Text fontSize="13px">Sweden</Text>
        <Text fontSize="13px">Email: hello@twiik.me</Text>
        <br />
        <br />
        <Text fontSize="13px" fontWeight="bold">
          Privacy policy
        </Text>
        <Text fontSize="13px">
          Read about our privacy policy{" "}
          <span className="spann">
            <a target="_blank" href="https://www.shapelink.com/en/misc/privacy">
              here.
            </a>
          </span>
        </Text>
      </Stack>
    </>
  );
};

export default TermsCondition;
